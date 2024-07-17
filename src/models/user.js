'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserHomeMG extends Model {
    static associate(models) {
      // define association here
    }
  }
  UserHomeMG.init({
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    UserName: {
      type: DataTypes.STRING
    },
    PassWord: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'UserHomeMG',
    tableName: 'UserHomeMG',
    timestamps: false
  });
  return UserHomeMG;
};
