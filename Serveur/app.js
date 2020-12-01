
const express = require('express')
const app = express()
const port = 3000
const turf = require('@turf/turf')
const fs = require('fs')
const GeoJSON = require('geojson');
var router = require('./routes/api.js');


/*fs.readFile('./json/rues.geojson', async function(erreur, fichier) {
  rues = JSON.parse(fichier);
  console.log(rues);
  fs.readFile('./intersection.geojson', async function(erreur, data) {
    intersections =JSON.parse(data);
    await segment(rues,intersections)
  })
  
})

async function segment(rues,intersections) {
  
  for (let i = 0; i < rues.features.length; i++) {
    rue=rues.features[i];
    
      for (let j = 0; j < rue.geometry.coordinates[0][j].length-1; j++) {
        point1 = rue.geometry.coordinates[0][j];
        point2 = rue.geometry.coordinates[0][j+1];
        
        start = turf.point(point1);
        end =turf.point(point2);
        line = turf.lineString([point1,point2]);
        console.log(line)
        //microSegment= turf.lineSlice(start,end,line)
              
        for (let y = 0; y < intersections.features.length; y++) {
          intersection= intersections.features[y];
          //console.log(rue.properties.FID+" "+intersection.properties.rue1+" "+intersection.properties.rue2) 
          
          if(rue.properties.FID==intersection.properties.rue1 || rue.properties.FID==intersection.properties.rue2){
            bool=turf.booleanPointOnLine(intersection,line);
            console.log(bool);
          }
        }
      }
  }
  console.log('toto')
}*/

app.use('/api', router);
app.get('/', (req, res) => {

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
