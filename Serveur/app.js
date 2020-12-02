
const express = require('express')
const app = express()
const port = 3000
const turf = require('@turf/turf')
const fs = require('fs')
const GeoJSON = require('geojson');
var router = require('./routes/api.js');
var Segment = require('./app/segments.js')
var Json = require('./app/generJson.js')
var Intersection = require('./app/intersection.js')
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
