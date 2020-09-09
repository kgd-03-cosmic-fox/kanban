'use strict';
const bcrypt = require('bcryptjs');
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
      User.hasMany(models.Task)
      // define association here
    }
  };
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: { args: [2, 255], msg: "Name must be at least 2 characters long." },
        notNull: { args: true, msg: "Name cannot be empty." }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: { args: true, msg: "Email must be in email format." },
        notNull: { args: true, msg: "Email cannot be empty." }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: { args: [6, 30], msg: "Password must be between 6 to 30 characters." } }
    },
    organization: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notNull: { args: true, msg: "Organization cannot be empty." } }
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  User.addHook('beforeCreate', (data, options) => {
    const salt = bcrypt.genSalt(10);
    data.password = bcrypt.hashSync(user.password, salt);
  })

  return User;
};