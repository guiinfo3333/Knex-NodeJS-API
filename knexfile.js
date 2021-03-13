// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
     database: "superguaxini",
     user: "postgres",
     password:"admin"
    },
    migrations:{
      tableName :'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
  
    },
    seeds:{
      directory: `${__dirname}/src/database/seeds`
    }
  },
  


};
