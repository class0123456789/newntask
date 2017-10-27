/**
 * Created by M.C on 2017/9/15.
 */
import fs from "fs"
import path from "path"
import Sequelize from "sequelize"

let db = null;


module.exports = app => {
    "use strict";
    if (!db) {
        const config = app.libs.config;
        const sequelize = new Sequelize(
            config.database,
            config.username,
            config.password,
            config.params
        );

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});
        db = {
            sequelize,
            Sequelize,
            models: {}
        };

        const dir = path.join(__dirname, "models");

        fs.readdirSync(dir).forEach(file => {
            const modelDir = path.join(dir, file);
            const model = sequelize.import(modelDir);
            db.models[model.name] = model;
        });

        Object.keys(db.models).forEach(key => {
            db.models[key].associate(db.models);
        //    db.models[key].associate(db.models);
        });

        //for(let [key,value] of Object.entries(db.models)){
        //  console.log('let of',key,value);
        //}
    }
    return db;
};
