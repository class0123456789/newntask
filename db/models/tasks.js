'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tasks = sequelize.define('Tasks', {
    title: DataTypes.STRING(50),
    done: DataTypes.BOOLEAN
  }

);
  Tasks.associate = (models) => {
    Tasks.belongsTo(models.Users);
 };
  return Tasks;
};
