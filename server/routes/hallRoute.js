const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const knex = require("knex");
const cloudinary = require("cloudinary").v2;
const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

// GET all halls
router.get("/", async (req, res) => {
  try {
    const halls = await db("halls").select("*");
    res.json(halls);
  } catch (error) {
    console.error("Error retrieving halls:", error);
    res.status(500).json({ error: "Failed to retrieve halls" });
  }
});

// GET a specific hall by ID
router.get("/:id", async (req, res) => {
  try {
    const hall = await db("halls").where("hall_id", req.params.id).first();
    if (hall) {
      res.json(hall);
    } else {
      res.status(404).json({ error: "Hall not found" });
    }
  } catch (error) {
    console.error("Error retrieving hall:", error);
    res.status(500).json({ error: "Failed to retrieve hall" });
  }
});

// POST (Create) a new hall
router.post("/", async (req, res) => {
  const { name, gender, rooms, hall_image } = req.body;

  console.log("Request body:", req.body);

  if (!name || !gender || !rooms || !hall_image) {
    return res.status(400).json({ error: "Please provide all required fields" });
  }

  const normalizedName = name.trim().toLowerCase();

  try {
    // Upload image to Cloudinary
    const ImageUrl = await cloudinary.uploader.upload(hall_image);

    // Check if a hall with the same name already exists
    const existingHall = await db("halls").where("name", normalizedName).first();
    if (existingHall) {
      console.log("Hall with the same name exists:", existingHall);
      return res.status(400).json({ error: "Hall with this name already exists" });
    }

    // Insert the new hall
    const [newHall] = await db("halls")
      .insert({
        hall_id: uuidv4(),
        name: normalizedName,
        gender,
        rooms,
        hall_image: ImageUrl.url,
      })
      .returning("*");

    console.log("New hall created:", newHall);
    res.status(201).json(newHall);
  } catch (error) {
    console.error("Error creating hall:", error);
    res.status(500).json({ error: "Failed to create hall" });
  }
});

// PUT (update) a hall by ID
router.put("/:id", async (req, res) => {
  const { name, gender, rooms, hall_image } = req.body;

  if (!name || !gender || !rooms || !hall_image) {
    return res.status(400).json({ error: "Please provide all required fields" });
  }

  let ImageUrl;
  try {
    // Attempt to upload the image to Cloudinary
    ImageUrl = await cloudinary.uploader.upload(hall_image, { timeout: 120000 });
    console.log("Uploaded image URL:", ImageUrl.url);
  } catch (uploadError) {
    console.error("Cloudinary upload failed:", uploadError);
    return res.status(500).json({ error: "Image upload failed" });
  }

  try {
    // Update the hall in the database
    const updatedCount = await db("halls")
      .where("hall_id", req.params.id)
      .update({
        name: name ? name.trim().toLowerCase() : undefined,
        gender,
        rooms,
        hall_image: ImageUrl.url, // Safe to access ImageUrl.url
      });

    if (updatedCount) {
      res.json({ message: "Hall updated successfully" });
    } else {
      res.status(404).json({ error: "Hall not found" });
    }
  } catch (dbError) {
    console.error("Database update failed:", dbError);
    res.status(500).json({ error: "Failed to update hall" });
  }
});

// DELETE a hall by ID
router.delete("/:id", async (req, res) => {
  try {
    const count = await db("halls").where("hall_id", req.params.id).del();
    if (count) {
      res.json({ message: "Hall deleted successfully" });
    } else {
      res.status(404).json({ error: "Hall not found" });
    }
  } catch (error) {
    console.error("Error deleting hall:", error);
    res.status(500).json({ error: "Failed to delete hall" });
  }
});

module.exports = router;
