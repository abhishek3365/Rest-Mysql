const Sequelize = require('sequelize');
var {sequelize} = require('../sequelize')

const User =  sequelize.define('users', {
  firstName: {
    type: Sequelize.STRING,
    allowNull : false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull : false
  },
  age : {
    type: Sequelize.INTEGER,
    allowNull : false
  }
});

User.sync();

module.exports.Users = User;
