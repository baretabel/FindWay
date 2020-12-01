var Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:root@localhost:3306/gestion_ordi');

const carrefour = sequelize.define('carrefour', {
    // attributes
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    geo:{
        type:Sequelize.GEOMETRY("POINT")
    }
 } ,{ tableName:"carrefour",timestamps: false});

 module.exports = carrefour;