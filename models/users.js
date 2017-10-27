'use strict';
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    id: {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true
},
    name: DataTypes.STRING(10),
    password: DataTypes.STRING(10),
    email: DataTypes.STRING(20)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Users;
};
