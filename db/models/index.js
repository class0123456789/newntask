'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require('../../config/config.js')[env];
//var config    = require(__dirname + '/../config/config.json')[env];
//var config =  require(process.execPath +'/config/config.js')[env]
var db        = {};
let sequelize = null;
console.log(config);
if (config.use_env_variable) {
   sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
   sequelize = new Sequelize(config.database, config.username, config.password, config);
}
/*sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });*/

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {

  if (db[modelName].associate) {

      console.log(`正在建立${modelName}模型关联`);
    db[modelName].associate(db);

  }
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = (app) => {
  if(app) {
    console.log('app.db');
    app.db = db;
    return app
  }
  console.log('db');
  return db
};
