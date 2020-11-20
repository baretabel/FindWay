'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Adresse extends Model {
    
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Adresse.belongsTo(models.rue);
    }
  };
  Adresse.init({
    name: DataTypes.STRING,
    geo: DataTypes.GEOMETRY,
    rueId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Adresse',
  });
  return Adresse;
};