const fs = require('fs')
const turf = require('@turf/turf')
function Segment(){
    this.fin=false
 this.rues
 this.rue
 this.end
 this.start
 this.line
 this.intersections
 this.segments=[]
 this.segment=[]
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
    
}
Segment.prototype.getRue=function (rue){
    this.rue=rue;
    console.log(this.rue.properties.FID);
    this.setGeo()
    
}
Segment.prototype.setGeo= function () {
    for (let j = 0; j < this.rue.geometry.coordinates[0][j].length-1; j++) {
        this.fin=false;
        point1 = this.rue.geometry.coordinates[0][j];
        point2 = this.rue.geometry.coordinates[0][j+1];
        this.start = turf.point(point1);
        this.end =turf.point(point2);
        this.line = turf.lineString([point1,point2]);
        //microSegment= turf.lineSlice(start,end,line)
        if(j==this.rue.geometry.coordinates[0][j].length-1){
            this.fin=true;
            console.log(this.fin)
        }
            this.getBoolean();
        
        
    }
}
Segment.prototype.getBoolean=function (){
    segments=[]
    for (let y = 0; y < this.intersections.features.length; y++) {
        intersection= this.intersections.features[y];
        //console.log(rue.properties.FID+" "+intersection.properties.rue1+" "+intersection.properties.rue2) 
        
        if(this.rue.properties.FID==intersection.properties.rue1 || this.rue.properties.FID==intersection.properties.rue2){
          bool=turf.booleanPointOnLine(intersection,this.line);
          
          if(this.fin==true){
            this.segment.push(this.end.geometry.coordinates)
            segment=turf.lineString(this.segment)
            console.log('totaaa')
            this.segments.push(segment)
            this.segment=[]
            console.log(this.segments)
          }else{
              if(bool==false){
                this.segment.push(this.start.geometry.coordinates)
                console.log(this.segment)
              }else if(bool==true){
                this.segment.push(intersection.geometry.coordinates)
                console.log('totoo')
                segment=turf.lineString(this.segment)
                this.segments.push(segment)
                this.segment=[]
                this.segment.push(intersection.geometry.coordinates)
                console.log(this.segments)
              }
          }
          
        }
        
      }
    
}
    

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
              
        
      }
  }
  console.log('toto')
}*/
