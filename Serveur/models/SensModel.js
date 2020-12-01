var Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:root@localhost:3306/gestion_ordi');

const sens = sequelize.define('sens', {
    // attributes
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    debut:{
        type:Sequelize.INTEGER
    },
    fin:{
        type:Sequelize.INTEGER
    },
    segmentId:{
        type:Sequelize.INTEGER
    },
    segmentRueId:{
        type:Sequelize.INTEGER
    }
 } ,{ tableName:"sens",timestamps: false});

 module.exports = sens;