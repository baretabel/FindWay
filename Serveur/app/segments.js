const fs = require('fs')
const turf = require('@turf/turf')
function Segment(){
 this.rues
 this.rues
 this.intersections
}
Segment.prototype.initialize = function () {
    this.rues=fs.readFileSync('./json/rues.geojson', function(erreur, fichier) {
        rues=JSON.parse(fichier)
        return rues
    })
    this.rues=JSON.parse(this.rues)
    this.intersections=fs.readFileSync('./intersection.geojson', function(erreur, fichier) {
        intersections=JSON.parse(fichier)
        return intersections
    })
    this.intersections=JSON.parse(this.intersections)
    console.log(this.intersections)
}
Segment.prototype.getRue=function (rue,index){
    this.rue=rue.features[index]
}
Segment.
module.exports = Segment;
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
