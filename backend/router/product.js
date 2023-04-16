
const express = require('express')
router = express.Router();
const { MongoClient } = require("mongodb");
const uri = `mongodb://${window.location.hostname}/:27017`;

router.post('/products/create', async(req, res,next) => {
  const user = req.body;
  const client = new MongoClient(uri);
  await client.connect();
  await client.db('DevTool').collection('product').insertOne({
    id: parseInt(user.id),
    fname: user.fname,
    lname: user.lname,
    username: user.username,
    email: user.email,
    avatar: user.avatar
  });
  await client.close();
  res.status(200).send({
    "status": "ok",
    "message": "User with ID = "+user.id+" is created",
    "user": user
  });
})

router.get('/products', async(req, res) => {
    const id = parseInt(req.params.id);
    const client = new MongoClient(uri);
    await client.connect();
    const users = await client.db('DevTool').collection('product').find({}).toArray();
    await client.close();
    res.status(200).send(users);
  })

exports.router = router;