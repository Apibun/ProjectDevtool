
const express = require('express')

router = express.Router();

const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017";

router.post('/news/create', async(req, res,next) => {
  const newss = req.body;
  const client = new MongoClient(uri);
  await client.connect();
  await client.db('DevTool').collection('news').insertOne({
    id: parseInt(newss.id),
    new_title: newss.new_title,
    new_detail: newss.new_detail,
    new_fulldetail: newss.new_fulldetail,
    new_image: newss.new_image,
    new_date: newss.new_date
  });
  await client.close();
  res.status(200).send({
    "message": "News with ID = "+newss.id+" is created",
  });
})

router.get('/news', async(req, res) => {
    const id = parseInt(req.params.id);
    const client = new MongoClient(uri);
    await client.connect();
    const get_news = await client.db('DevTool').collection('news').find({}).toArray();
    await client.close();
    res.status(200).send(get_news);
  })

  router.get('/news/:id', async(req, res) => {
    const id = parseInt(req.params.id);
    const client = new MongoClient(uri);
    await client.connect();
    const get_news = await client.db('DevTool').collection('news').findOne({ "id": id });
    await client.close();
    res.status(200).send(get_news);
  })


exports.router = router;