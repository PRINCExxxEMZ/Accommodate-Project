const express = require('express')
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const knex = require("knex");
const upload = require('../middleware/multer');
const cloudinary = require('../utils/cloudinary')


//-------------------------------------------------------------------- Initialize Knex Config

const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);


//-------------------------------------------------------------------- GET all rooms

router.get('/', async (req, res) => {
  try {
    const rooms = await db('rooms').select('*');
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve rooms' });
  }
});

//-------------------------------------------------------------------- GET (Locate) a specific room by ID

router.get('/:id', async (req, res) => {
  try {
    const room = await db('rooms').where('room_id', req.params.id).first();
    if (room) {
      res.json(room);
    } else {
      res.status(404).json({ error: 'Room not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve room' });
  }
});

//-------------------------------------------------------------------- POST (Create) a new room


router.post('/', async (req, res) => {

  // const result = await cloudinary.uploader.upload(req.file.path);
  // const room_image = result.secure_url

  const { room_number, hall_id, hall_name, bunk_capacity, bed_space, price, room_image } = req.body;

  try {


//-------------------------------------------------------------------- Check if a hall with the same name already exists

      const existingRoom = await db('rooms').where('room_number', room_number).first();
      if (existingRoom) {
        return res.status(400).json({ error: 'Room with this name already exists' });
      }

 //------------------------------------------------------------------- Insert the new Room

    const [id] = await db('rooms')
      .insert({
        room_id: uuidv4(),
        room_number,
        hall_id,
        hall_name,
        bunk_capacity,
        bed_space,
        price
      })
      .returning('*');
    res.status(201).json({ room_id: id });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create room' });
  }
});

//------------------------------------------------------------------- PUT (update) a room by ID

router.put('/:id', async (req, res) => {
  const { room_number, hall_id, bunk_capacity, bed_space, booked_spaces, is_available } = req.body;
  try {
    const count = await db('rooms')
      .where('room_id', req.params.id)
      .update({ room_number, hall_id, bunk_capacity, bed_space, booked_spaces, is_available });
    if (count) {
      res.json({ message: 'Room updated successfully' });
    } else {
      res.status(404).json({ error: 'Room not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update room' });
  }
});

//------------------------------------------------------------------- DELETE a room by ID

router.delete('/:id', async (req, res) => {
  try {
    const count = await db('rooms').where('room_id', req.params.id).del();
    if (count) {
      res.json({ message: 'Room deleted successfully' });
    } else {
      res.status(404).json({ error: 'Room not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete room' });
  }
});


module.exports = router