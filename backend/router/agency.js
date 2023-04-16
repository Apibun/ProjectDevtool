const express = require("express");
router = express.Router();
const multer = require("multer");
const { MongoClient } = require("mongodb");
const uri = "mongodb://52.87.185.115:27017";

// Set up Multer for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./static/uploads"); // Specify the upload directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Generate a unique file name
  },
});
const upload = multer({ storage: storage });

router.get("/agency", async (req, res) => {
  const client = new MongoClient(uri);
  await client.connect();
  const getAgency = await client
    .db("DevTool")
    .collection("agency")
    .find({})
    .toArray();
  await client.close();
  res.status(200).send(getAgency);
});

router.post("/agency", upload.single("image"), async (req, res) => {
  console.log({ reqfile: req.file });
  console.log({ reqfilepath: req.file.path });
  const agency = req.body;
  console.log(agency);
  const client = new MongoClient(uri);
  await client.connect();
  await client
    .db("DevTool")
    .collection("report")
    .insertOne({
      image: req.file.path.substring(6),
      heading: agency.heading,
      inform: agency.inform,
      agency_id: agency.agency_id,
    });
  await client.close();
  res.status(200).json({ message: "Upload Image Successfully" });
});

exports.router = router;
