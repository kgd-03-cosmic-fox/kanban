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
      User.belongsTo(models.Organization)
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
    isAdmin:{
      type: DataTypes.BOOLEAN,
      allowNull:false
    },
    OrganizationId: {
      type: DataTypes.INTEGER,
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

    let newFormatName=""
    for(let a = 0; a < userInstance.name.length; a++ ){
      if(a===0){
        newFormatName+= userInstance.name[a].toUpperCase()
        }
        else{
        newFormatName+= userInstance.name[a]
        }
      }

    userInstance.name = newFormatName

  })


  return User;
};