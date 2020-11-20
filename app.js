
const express = require('express')
const app = express()
const port = 3000


const Graph = require('node-dijkstra')
const route = new Graph()
const fs = require('fs')

let routes = []

// route.addNode('E', { D: 7 })

// result = route.path('A', 'E') // => [ 'A', 'B', 'C', 'D' ]
// console.log(result);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

const data = fs.readFileSync('./rue.geojson')
let dataa = JSON.parse(data)

dataa.features.forEach(element => {
    let id = element.properties.FID
    let poid = element.properties.longueur
    console.log(element.geometry.coordinates)
    routes.push({id: id, poid: poid})
});
