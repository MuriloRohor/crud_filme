const sequelize = require('sequelize');
const database = require('../db/db');

const Filme = database.define('Filme', {
  id_filme: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  titulo: {
    type: sequelize.STRING,
    allowNull: false
  },
  categoria: {
    type: sequelize.STRING,
    allowNull: false
  },
  genero: {
    type: sequelize.STRING,
    allowNull: false
  },
  link: {
    type: sequelize.STRING,
    allowNull: false
  }
  
},{database, modelname: 'filme', tableName:'filmes'})

module.exports = Filme;