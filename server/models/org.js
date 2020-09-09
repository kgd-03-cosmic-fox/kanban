'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Org extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Org.hasMany(models.Task)
      Org.belongsToMany(models.User , {through : models.OrgMember} )
      
    }
  };
  Org.init({
    org_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Org',
  });
  return Org;
};