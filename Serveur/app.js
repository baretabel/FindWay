
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
    var type='lal';
    if(intersection !== null){
      if(intersection.geometry.type=='Point'){
        console.log(intersection),
      intersections.push({rue1 : rues.features[i].properties.FID, rue2 : rues.features[y].properties.FID, intersection: intersection.geometry.coordinates})
      }
    }
    
    }
  }
  intersections=GeoJSON.parse(intersections,{Point: 'intersection'})
    console.log(intersections);
    var string = JSON.stringify(intersections,null,'\t');

      fs.writeFile('./intersection.geojson',string,function(err) {
        if(err) return console.error(err);
        console.log('done');
      })
  
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
