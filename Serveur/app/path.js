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

//let dataTest = {
//  1: {2: 6, 5: 4},
//  2: {1: 6, 5: 5, 3: 4},
//  3: {2: 4, 4: 7},
//  4: {5: 4, 3: 7},
//  5: {2: 5, 4: 4, 1: 4}
//}
