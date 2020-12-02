'use strict';

const fs = require('fs');
const turf = require('@turf/turf');

const fichier =fs.readFileSync('./json/rue.geojson');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */ 
    let intersections=[];
    let rues = JSON.parse(fichier);
      
    for (let i = 0; i < rues.features.length; i++) {
      for (let y = 0; y < rues.features.length; y++){
     let rue1=rues.features[i].geometry.coordinates
     let rue2=rues.features[y].geometry.coordinates
      var poly1 = turf.multiLineString(rue1);
      var poly2 = turf.multiLineString(rue2);
      var intersection = turf.intersect(poly1, poly2);
      var type='lal';
      if(intersection !== null){
        if(intersection.geometry.type=='Point'){

  var coord=intersection.geometry.coordinates;

intersections.push({ 
  geo:Sequelize.fn('ST_GeomFromText', `POINT(${coord[0]} ${coord[1]})`),
    createdAt:new Date(),
    updatedAt:new Date()
});
        }
      }
      
      }
    }

  return queryInterface.bulkInsert('carrefours',intersections,{})

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    console.log("coord")
    await queryInterface.bulkDelete('carrefours', null, {});
  }
};
