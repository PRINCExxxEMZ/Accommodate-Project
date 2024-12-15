const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const knex = require('knex');
const jwt = require('jsonwebtoken');


//--------------------------------------------------------- Initialize Knex Config

const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);


//--------------------------------------------------------- Secret key for JWT (should be kept in environment variables for production)
const SECRET_KEY = 'your_secret_key';



//--------------------------------------------------------- Login endpoint
router.post('/', async (req, res) => {
    const { email, password } = req.body;
    

    try {
        //------------------------------------------------- Check if user exists
        
        const user = await db('users').where({ email }).first();
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }
        
        //------------------------------------------------- Check password

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        //------------------------------------------------ Generate JWT token
        const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '5d' });

        
        res.status(200).json(
            {
                message: "Logged in successfully", 
                token: token,
                user_id: user.id,
                role: user.role,
                first_name: user.first_name,
                last_name: user.last_name
            }
        );
    }   catch (err) {
        
        res.status(500).json({ error: err.message });
    }
});


module.exports = router