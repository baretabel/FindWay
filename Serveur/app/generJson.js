

const fs = require('fs')
const GeoJSON = require('geojson');
function GenerJson(){
    this.attributions
}
GenerJson.prototype.addIntersection = function(intersections){

    intersections=GeoJSON.parse(intersections.slice(1),{Point: 'intersection'})
    
    var string = JSON.stringify(intersections,null,'\t');

      fs.writeFile('./intersection.geojson',string,function(err) {
        if(err) return console.error(err);
        console.log('done');
      })
 
}
module.exports = GenerJson;