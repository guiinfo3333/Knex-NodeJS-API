module.exports = {
  client: 'pg',
  connection: {
    user: 'postgres',
    password: 'admin',
    database: 'superguaxini'
  },
  migrations: {
    directory: `${__dirname}/database/migrations`
  },
  seeds: {
    directory: `${__dirname}/database/seeds`
  },

  useNullAsDefault: true,
}
