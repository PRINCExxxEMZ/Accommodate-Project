const express = require('express')
const cloudinary = require('cloudinary').v2
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const knex = require("knex");


//-----------------------------------------------------Initialize Knex Config
const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);


const secret = "your_jwt_secret_key";

cloudinary.config({
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
  api_secret:process.env.CLOUDINARY_SECRET_KEY,
  api_key:process.env.CLOUDINARY_CLOUD_API_KEY
})


  //-----------------------------------------------------GET all halls
router.get("/", async (req, res) => {
    try {
      const halls = await db("halls").select("*");
      res.json(halls);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve halls" });
    }
  });
  

  //-----------------------------------------------------GET (Locate) a specific hall by ID
  router.get("/:id", async (req, res) => {
    try {
      const hall = await db("halls").where("hall_id", req.params.id).first();
      if (hall) {
        res.json(hall);
      } else {
        res.status(404).json({ error: "Hall not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve hall" });
    }
  });
  

  //------------------------------------------------------POST (Create) a new hall
  router.post('/', async (req, res) => {
    const { name, gender, rooms, hall_image } = req.body;
    console.log(name)
    console.log(gender)
    console.log(rooms)
    console.log(hall_image)
    const hallImageUrl = await cloudinary.uploader.upload(hall_image)
    console.log(hallImageUrl)
    const hallImage = hallImageUrl.url
    try {
      //------Check if a hall with the same name already exists
      const existingHall = await db('halls').where('name', name).first();
      if (existingHall) {
        return res.status(400).json({ error: 'Hall with this name already exists' });
      }
      //------Insert the new hall
      const [id] = await db('halls')
        .insert({
          hall_id: uuidv4(),
          name,
          gender,
          rooms,
          hallImage
          
        })
        .returning('*');
  
      res.status(201).json(id);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create hall' });
    }
  });
  
  
  //-------------------------------------------------------PUT (update) a hall by ID
  router.put("/:id", async (req, res) => {
    const { name, gender, rooms } = req.body;
    try {
      const count = await db("halls")
        .where("hall_id", req.params.id)
        .update({ name, gender, rooms });
      if (count) {
        res.json({ message: "Hall updated successfully" });
      } else {
        res.status(404).json({ error: "Hall not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to update hall" });
    }
  });
  

  //--------------------------------------------------------DELETE a hall by ID
  router.delete("/:id", async (req, res) => {
    try {
      const count = await db("halls").where("hall_id", req.params.id).del();
      if (count) {
        res.json({ message: "Hall deleted successfully" });
      } else {
        res.status(404).json({ error: "Hall not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to delete hall" });
    }
  });


  module.exports = router