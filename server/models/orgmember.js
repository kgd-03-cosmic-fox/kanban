'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrgMember extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  OrgMember.init({
    OrgId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    FlagOwner: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrgMember',
    hooks:{
      beforeCreate(instance , options){
        
        if(instance.OrgId == 1){
          instance.FlagOwner = 0
        }
        
      }
    }
  });
  return OrgMember;
};