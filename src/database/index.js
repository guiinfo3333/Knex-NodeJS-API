const knexfile = require('../../knexfile')
const knex = require('knex')(knexfile["development"])  //pegando a chave do knex

module.exports = knex
