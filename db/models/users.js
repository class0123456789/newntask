'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    name: DataTypes.STRING(20),
    password: DataTypes.STRING(100),
    email: DataTypes.STRING(30)
  }

);
  Users.associate = (models) => {
    Users.hasMany(models.Tasks);
  };
  return Users;
};
