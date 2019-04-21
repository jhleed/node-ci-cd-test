'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
//TODO 경로를 외부에서 가져오도록 설정파일을 변경해줘야 함
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
