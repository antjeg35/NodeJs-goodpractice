const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Pa$$w0rd', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
