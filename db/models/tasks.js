'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tasks = sequelize.define('Tasks', {
    title: {
      type:DataTypes.STRING(50),
      allowNull: false
    },
    done: {
      type:DataTypes.BOOLEAN,
      allowNull: false,
    }
  }

);
  Tasks.associate = (models) => {
    Tasks.belongsTo(models.Users);
 };
  return Tasks;
};
