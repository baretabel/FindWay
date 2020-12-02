const Graph = require('node-dijkstra')
const Fs   = require('fs')
const Turf = require('@turf/turf')

class Path{
    
    constructor(){
        this.tab = {}
    }
    
    // Getters
    get getIti(){
        let iti = this.calculItineraire()
        return iti
    }

    get getDestination(){
        return this.destination
    }

    get getFromLocation(){
        return this.fromLocation
    }
    
    // Setters
    setDestination(destination){
        this.destination = destination
    }
    
    setFromLocation(locationFrom){
        this.fromLocation = locationFrom
    }

    // Methods
    calculItineraire(){
        if(this.destination && this.fromLocation){
            return this.path.path(this.fromLocation, this.destination)
        }else{
            return 'cannot calculate Itinairaire'
        }
    }

    defineArrayPath(map){
        this.graph = new Graph(map)
    }

    setDataTestPath(){
        let dataTest = Fs.readFileSync('./json/rues.geojson', 'utf8')
        let data     = JSON.parse(dataTest)
        data.features.forEach(element => {
            let fid = element.properties.FID
            let poly = Turf.multiLineString(element.geometry.coordinates)
            this.tab[fid] = {}
            this.getIntersection(data, fid, poly)
        });
        console.log('\n\n DataView \n');
        console.log(this.tab);
    }

    getIntersection(data, fid, poly1){
        data.features.forEach(element => {
            if(element.properties.FID != fid){
                var poly = Turf.multiLineString(element.geometry.coordinates)
                let intersection = Turf.lineIntersect(poly1, poly);
                if(intersection.features.length > 0){
                    let tmp = {}
                    tmp[element.properties.FID] = element.properties.longueur
                    Object.assign(this.tab[fid], tmp)
                }
            }
        });
    }
}

module.exports = Path

//let dataTest = {
//  1: {2: 6, 5: 4},
//  2: {1: 6, 5: 5, 3: 4},
//  3: {2: 4, 4: 7},
//  4: {5: 4, 3: 7},
//  5: {2: 5, 4: 4, 1: 4}  rfe
//}
