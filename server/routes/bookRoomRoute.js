const express = require('express')
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const knex = require("knex");


//-----------------------------------------------------Initialize Knex Config
const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);


const secret = "your_jwt_secret_key";

router.post('/check-availability', async (req, res) => {
  const { room_id, student_id, bed_number } = req.body;
  console.log(room_id)
  console.log(student_id)
  console.log(bed_number)
  
  try {
    const booked_student = await db('booked_room').where('student_id', student_id).first();
    
    // Check if the room is available
    const room = await db('rooms').where('room_id', room_id).first();


    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }

    

    const booked_bed = await db('booked_room').where({ room: room_id, bed_number }).first();

    if (booked_student) {
      return res.status(400).json({ error: 'Student has already booked a room' });
    }

    if (!room.is_available) {
      return res.status(400).json({ error: 'Room is full' });
    }

    if (booked_bed) {
      return res.status(400).json({ error: 'Bed has already been booked' });
    }

    res.status(201).json({message:"Available"});
  } catch (error) {
    res.status(500).json({ error: 'Failed to book room' });
  }
});

router.post('/', async (req, res) => {
  const { room_id, student_id, bed_number } = req.body;
  
  try {
    const booked_student = await db('booked_room').where('student_id', student_id).first();
    
    // Check if the room is available
    const room = await db('rooms').where('room_id', room_id).first();


    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }

    
    
   

    const booked_bed = await db('booked_room').where({ room: room_id, bed_number }).first();

    if (booked_student) {
      return res.status(400).json({ error: 'Student has already booked a room' });
    }

    if (!room.is_available) {
      return res.status(400).json({ error: 'Room is full' });
    }

    if (booked_bed) {
      return res.status(400).json({ error: 'Bed has already been booked' });
    }

    // Insert the new booking
    const [newBooking] = await db('booked_room')
      .insert({
        id: uuidv4(),
        student_id,
        bed_number,
        room: room_id
      })
      .returning('*');

    // Update the bed_space and check if the room is full
    const updatedBedSpace = room.booked_spaces + 1;
    const isRoomAvailable = updatedBedSpace < room.bed_space;

    await db('rooms')
      .where('room_id', room_id)
      .update({
        booked_spaces: updatedBedSpace,
        is_available: isRoomAvailable
      });

    res.status(201).json(newBooking);
  } catch (error) {
    res.status(500).json({ error: 'Failed to book room' });
  }
});



router.get("/", async (req, res) => {
  try {
    const booked_room = await db("booked_room").select("*");
    res.json(booked_room);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve booked room" });
  }
});



module.exports = router