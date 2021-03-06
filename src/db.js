import Sequelize from 'sequelize';
import models from './models';
import config from './config';
const db = {};

// create your instance of sequelize
const sequelize = new Sequelize(config.db.name, config.db.username, config.db.password);

// load models
Object.keys(models).forEach((modelName) => {
    const model = models[modelName](sequelize, Sequelize.DataTypes);
    db[modelName] = model;
});


// invoke associations on each of the models
Object.keys(db).forEach((modelName) => {
    if (db[modelName].options.associate) {
        db[modelName].options.associate(db);
    }
});


export default Object.assign({}, db, {
    sequelize,
    Sequelize
});
