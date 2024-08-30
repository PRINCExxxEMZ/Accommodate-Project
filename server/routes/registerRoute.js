const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const knex = require('knex');
const { v4: uuidv4 } = require("uuid");

//-----------------------------------------------------------------Initialize Knex Config

const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);

//-----------------------------------------------------------------Registration endpoint

router.post('/', async (req, res) => {
    const { first_name, middle_name, last_name, email, password, registration_number, department, is_disabled, level } = req.body;
    console.log(first_name)
    const role = "Student"

    try {
        //-------------------------------------------------------- Check if email already exists

        const existingUser = await db('users').where({ email }).first();
        if (existingUser) {
            return res.status(400).json({ error: 'Email already registered' });
        }

        //--------------------------------------------------------- Hash the password

        const hashedPassword = await bcrypt.hash(password, 10);

        //--------------------------------------------------------- Insert the new user
        const newUser = {
            id: uuidv4(),
            first_name,
            middle_name,
            last_name,
            email,
            password: hashedPassword,
            role,
            registration_number,
            department,
            is_disabled,
            level
        };
        const userId = await db('users').insert(newUser).returning('*');


        res.status(201).json(userId);
    }   catch (err) {
        res.status(500).json({ error: err.message });
    }
});


module.exports = router