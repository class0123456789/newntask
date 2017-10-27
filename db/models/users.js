'use strict';
import bcrypt from 'bcrypt';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    name: {
      type:DataTypes.STRING(20),
      allowNull: false
    },

    password: {
      type:DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type:DataTypes.STRING(30),
      allowNull: false
    }
  },
  {
      hooks: {
          beforeCreate: user => {
              const salt = bcrypt.genSaltSync();
              user.password = bcrypt.hashSync(user.password, salt);
          }
      }
  }

);
  Users.isPassword = (encodedPassword, password) => {
      return bcrypt.compareSync(password, encodedPassword);
  };
  Users.associate = (models) => {
    Users.hasMany(models.Tasks);
  };
  return Users;
};
