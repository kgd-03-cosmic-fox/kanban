'use strict';

const bcrypt = require(`bcryptjs`)

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          args:true,
          msg:"Name cannot be empty"
        }
      }
    },
    email: {
      type:DataTypes.STRING,
      unique:true,
      allowNull:false,
      validate:{
        isEmail:{
          args:true,
          msg:"Invalid email format"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          args:true,
          msg:"Password cannot be empty"
        }
      }
    },
    OrganizationName: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          args:true,
          msg:"Organization name cannot be empty"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((userInstance)=>{
    const salt = bcrypt.genSaltSync(10)
    userInstance.password = bcrypt.hashSync(userInstance.password,salt)
  })


  return User;
};