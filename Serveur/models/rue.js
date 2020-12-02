'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Rue.init({
    name: DataTypes.STRING,
    geo: DataTypes.GEOMETRY
  }, {
    sequelize,
    modelName: 'Rue',
  });
  return Rue;
};