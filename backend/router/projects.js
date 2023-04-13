
const express = require('express')

router = express.Router();

const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017";


router.get('/project', async(req, res) => {
    const id = parseInt(req.params.id);
    const client = new MongoClient(uri);
    await client.connect();
    const get_project = await client.db('DevTool').collection('projects').find({}).toArray();
    await client.close();
    res.status(200).send(get_project);
  })

  router.get('/project/:id', async(req, res) => {
    const id = parseInt(req.params.id);
    const client = new MongoClient(uri);
    await client.connect();
    const get_project = await client.db('DevTool').collection('projects').findOne({ "id": id });
    await client.close();
    res.status(200).send(get_project);
  })

exports.router = router;