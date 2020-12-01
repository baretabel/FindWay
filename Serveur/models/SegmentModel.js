var Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:root@localhost:3306/gestion_ordi');

const segment = sequelize.define('segment', {
    // attributes
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    geo:{
        type:Sequelize.GEOMETRY
    },
    rue_id:{
        type:Sequelize.INTEGER
    },
    pieton:{
        type:Sequelize.TINYINT
    }
 } ,{ tableName:"segment",timestamps: false});

 module.exports = segment;