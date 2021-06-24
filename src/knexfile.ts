console.log(process.env.HOST)
console.log(process.env.DATABASE)
console.log(process.env.USUARIO)
console.log(process.env.PASSWORD)
console.log(process.env.PORT)
module.exports = {
  client: 'pg',
  connection: {
    // host: process.env.HOST,
    user: process.env.USUARIOBANCO,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  },
  migrations: {
    directory: `database/migrations`
  },
  seeds: {
    directory: `database/seeds`
  },

  useNullAsDefault: true,
}
