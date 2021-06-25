console.log("DATABASE", process.env.DATABASE)
console.log("PASSWORD", process.env.PASSWORD)
console.log("PORT", process.env.PORT)
console.log("PORT", process.env.HOST)
console.log("Dentro do Index", process.env.DATABASE_URL)
module.exports = {
  client: 'pg',
  connection: {
    user: process.env.USUARIOBANCO,
    password: process.env.PASSWORD,
    port: Number(process.env.PORTA),
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
