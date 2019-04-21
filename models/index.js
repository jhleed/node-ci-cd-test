'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';

//보안상 프로퍼티 정보는 외부에서 가져오도록 설정
const configPath = require(__dirname + '/../config/config-path.json').configPath;
const config = require(configPath)[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//모델 정보를 읽어온다.
db.User = require('./user')(sequelize, Sequelize);

module.exports = db;
