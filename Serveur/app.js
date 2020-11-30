
const express = require('express')
const app = express()
const port = 3000
const turf = require('@turf/turf')
const fs = require('fs')
const GeoJSON = require('geojson');
fs.readFile('./json/rue.geojson', function(erreur, fichier) {
  let intersections=[];
  let rues = JSON.parse(fichier);

  for (let i = 0; i < rues.features.length; i++) {
    for (let y = 0; y < rues.features.length; y++){
    rue1=rues.features[i].geometry.coordinates
    rue2=rues.features[y].geometry.coordinates
    var poly1 = turf.multiLineString(rue1);
    var poly2 = turf.multiLineString(rue2);
    var intersection = turf.intersect(poly1, poly2);
    
    if(intersection){
      intersections.push(GeoJSON.parse({Point: intersection}))
      console.log(intersection);
      
    }
    var string = JSON.stringify(intersection,null,'\t');

      fs.writeFile('./intersection.geojson',string,function(err) {
        if(err) return console.error(err);
        console.log('done');
      })
    }
  }
  
  console.log(intersections);
  /*
  rue1=rues.features[188].geometry.coordinates
  rue2=rues.features[27].geometry.coordinates
  var poly1 = turf.multiLineString(rue1);
  var poly2 = turf.multiLineString(rue2);
  var intersection = turf.intersect(poly1, poly2);
  
  console.log(intersection);*/
})


app.get('/', (req, res) => {
    
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
