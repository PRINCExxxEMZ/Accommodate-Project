const express = require('express')
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const knex = require("knex");


//-----------------------------------------------------Initialize Knex Config
const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);


const secret = "your_jwt_secret_key";

router.post('/', async (req, res) => {
  const { room_id, student_id, bed_number } = req.body;
  console.log(room_id)
  console.log(student_id)
  console.log(bed_number)

  try {
    // Check if the room is available
    const room = await db('rooms').where('room_id', room_id).first();
    console.log(room)

    if (!room.is_available) {
      return res.status(400).json({ error: 'Room is full' });
    }

    // Insert the new booking
    const [newBooking] = await db('booked_room')
      .insert({
        id: uuidv4(),
        student_id,
        bed_number,
        room : room_id
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
    res.status(500).json({ error: 'Failed to book room'});
  }
});

module.exports = router