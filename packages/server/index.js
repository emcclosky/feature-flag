const stubbedMemory = {}

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())

app.get('/api/features', getFeatures);
app.post('/api/features', postFeatures);
app.put('/api/features', updateFeatures);

function getFeatures(req, res, next) {
  // TO DO: Connect to DB and retrieves all features
  // Send features back in correct structure
  return res.send(stubbedMemory).status(200)
}

function postFeatures(req, res, next) {
  // TO DO: Use only for adding new features
  const features = req.body
  Object.assign(stubbedMemory, features)
  console.log('stubbedMemory', stubbedMemory)
  return res.sendStatus(200)
}

function updateFeatures(req, res, next) {
  //TO DO: Use only for updating features
  return res.sendStatus(200)
}


app.listen(8080)

