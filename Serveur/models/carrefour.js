'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carrefour extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Carrefour.init({
    geo: DataTypes.GEOMETRY
  }, {
    sequelize,
    modelName: 'Carrefour',
  });
  return Carrefour;
};