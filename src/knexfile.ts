console.log(process.env.HOST)
console.log(process.env.DATABASE)
console.log(process.env.USUARIO)
console.log(process.env.PASSWORD)
console.log(process.env.PORT)
console.log("DENTROD DO KNX", process.env.DATABASE_URL)
module.exports = {
  client: 'pg',
  connection: {
    user: process.env.USUARIOBANCO,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    database: process.env.DATABASE,
  },
  migrations: {
    directory: `database/migrations`
  },
  seeds: {
    directory: `database/seeds`
  },

  useNullAsDefault: true,
}
