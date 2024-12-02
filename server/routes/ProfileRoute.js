const express = require('express');
const router = express.Router();
const knex = require('knex');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development)

//-----------------------------------------------------GET All Users
router.get('/', async (req, res) => {
  try {
    // Retrieve all users from the database
    const users = await db('users').select('id', 'first_name', 'last_name', 'registration_number', 'department', 'level');

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
});


//-----------------------------------------------------GET User by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Retrieve user details from the database by their unique id
    const user = await db('users').where({ id }).first();

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Don't return the password to the client
    const { password, ...userProfile } = user;

    res.status(200).json(userProfile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve user' });
  }
});

//-----------------------------------------------------DELETE User by ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the user exists
    const user = await db('users').where({ id }).first();
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Delete the user
    await db('users').where({ id }).del();

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete user' });
  }
});

//-----------------------------------------------------PUT (Update) User Profile
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { first_name, middle_name, last_name, password, registration_number, department, level } = req.body;

  try {
    // Fetch the user to update by id
    const user = await db('users').where({ id }).first();

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update user fields (only if they are provided in the request)
    const updatedUser = {
      first_name: first_name || user.first_name,
      middle_name: middle_name || user.middle_name,
      last_name: last_name || user.last_name,
      registration_number: registration_number || user.registration_number,
      department: department || user.department,
      level: level || user.level,
    };

    // If the password is provided, hash it before saving
    if (password) {
      const salt = await bcrypt.genSalt(10);
      updatedUser.password = await bcrypt.hash(password, salt);
    }

    // Update the user in the database
    await db('users').where({ id }).update(updatedUser);

    res.status(200).json({ message: 'Profile updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update profile' });
  }
});

module.exports = router;
