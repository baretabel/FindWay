const Graph = require('node-dijkstra')

class Path{
    
    constructor(mapped){
        this.path = new Graph(mapped)
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
            return 'nop'
        }
    }
}

module.exports = Path

// let dataTest = {
//     a: {b: 5, e: 2},
//     b: {a: 5, c: 2},
//     c: {b: 2, e: 4, d: 3},
//     d: {e: 7, c: 3},
//     e: {c: 4, a: 2, d: 7}
//   }