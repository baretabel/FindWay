
const express = require('express')
const app = express()
const port = 3000
const turf = require('@spatial/intersect')
const fs = require('fs')

fs.readFile('./json/rue.geojson', function(erreur, fichier) {
    let rues = JSON.parse(fichier)
    
    console.log(rues.features[0]
        )
 })


app.get('/', (req, res) => {
    fs.readFile('./json/rue.geojson', function(erreur, fichier) {
        let rues = JSON.parse(fichier)
        console.log(rues.features.properties)
     })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
