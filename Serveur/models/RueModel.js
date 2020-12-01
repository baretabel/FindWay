var Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:root@localhost:3306/gestion_ordi');

const rue = sequelize.define('rue', {
    // attributes
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    nom: {
      type: Sequelize.STRING,
    },
    geo:{
        type:Sequelize.GEOMETRY
    }
 } ,{ tableName:"rue",timestamps: false});

 module.exports = rue;