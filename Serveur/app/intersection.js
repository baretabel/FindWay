
const fs = require('fs')
const turf = require('@turf/turf')
function Intersection(){
    this.rues=[]
    this.point
    this.intersections=[]
    this.id=0;
}

Intersection.prototype.setPoint = function(rue1,rue2){
    var poly1 = turf.multiLineString(rue1.geometry.coordinates);
    var poly2 = turf.multiLineString(rue2.geometry.coordinates);
    var intersection = turf.lineIntersect(poly1, poly2);
    if(intersection.features.length==1){
      console.log(intersection.features[0].geometry)
        if(intersection.features[0].geometry.type=='Point'){
        
        this.point={ id:this.id, rue1 : rue1.properties.FID, rue2 : rue2.properties.FID, intersection: intersection.features[0].geometry.coordinates}
        }
    }
    return this.point
}

Intersection.prototype.getRues = function(){
   this.rues=fs.readFileSync('./json/rues.geojson', function(erreur, fichier) {
        rues=JSON.parse(fichier)
        return rues
    })
    this.rues=JSON.parse(this.rues)
    
}
Intersection.prototype.setIntersections= function(){ 
   for (let i = 0; i < this.rues.features.length; i++) {
        for (let y = 0; y < this.rues.features.length; y++){
            rue1=this.rues.features[i]
            rue2=this.rues.features[y]
            this.intersections.push(this.setPoint(rue1,rue2));
            this.id++
        }
    }
    
    
    return this.intersections
}
module.exports = Intersection;
/*
fs.readFile('./json/rues.geojson', function(erreur, fichier) {
  let intersections=[];
  let rues = JSON.parse(fichier);
  let id=0;
  for (let i = 0; i < rues.features.length; i++) {
    for (let y = 0; y < rues.features.length; y++){
    rue1=rues.features[i].geometry.coordinates
    rue2=rues.features[y].geometry.coordinates
    var poly1 = turf.multiLineString(rue1);
    var poly2 = turf.multiLineString(rue2);
    var intersection = turf.intersect(poly1, poly2);
    var type='lal';
    id++
    if(intersection !== null){
      if(intersection.geometry.type=='Point'){
        console.log(intersection),
      intersections.push({ id:id, rue1 : rues.features[i].properties.FID, rue2 : rues.features[y].properties.FID, intersection: intersection.geometry.coordinates})
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
  
 
})*/
