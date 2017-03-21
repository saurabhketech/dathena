import Sequelize from 'sequelize';
import models from './models';
import config from './config';
import express from 'express';
let app = express();
const db = {};

console.log('Initializing Sequelize');
// create your instance of sequelize
const sequelize = new Sequelize(config.db.name, config.db.username, config.db.password);

// load models
Object.keys(models).forEach((modelName) => {
    console.log(`Loading model - ${modelName}`);
    const model = models[modelName](sequelize, Sequelize.DataTypes);
    db[modelName] = model;
});


// invoke associations on each of the models
Object.keys(db).forEach((modelName) => {
    if (db[modelName].options.associate) {
        db[modelName].options.associate(db);
    }
});

// console.log(sequelize);
export default Object.assign({}, db, {
    sequelize,
    Sequelize
});
