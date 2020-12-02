
const express = require('express')
const app = express()
const port = 3000
const turf = require('@turf/turf')
const fs = require('fs')
const GeoJSON = require('geojson');

let router = require('./routes/api.js');
let Segment = require('./app/segments.js')
let Json = require('./app/generJson.js')
let Intersection = require('./app/intersection.js')
/*json=new Json
intersection= new Intersection;
intersection.getRues();
json.addIntersection(intersection.setIntersections());*/

segment=new Segment;
segment.initialize()
segment.rues.features.forEach(rue => {
  
   segment.getRue(rue);
});



app.use('/api', router);
app.get('/', (req, res) => {

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
