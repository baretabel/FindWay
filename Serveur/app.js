
const express = require('express')
const upload = require('express-fileupload');

const app = express()

const turf = require('@turf/turf')
const GeoJSON = require('geojson')
const router = require('./routes/api.js')
const bodyParser = require('body-parser');

app.use(upload(undefined)); // support json encoded bodies

app.use('/api', router);

app.post('/api/upload', (req, res) => {
  if(req.files) {
    console.log(req.files)
  }
})

app.listen(3000 , () => {
  console.log(`Example app listening at http://localhost:${3000}`)
})
