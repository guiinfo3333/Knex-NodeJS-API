import knex from 'knex';
import dotenv from 'dotenv';
dotenv.config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
})


console.log("DATABASE", process.env.DATABASE)
console.log("PASSWORD", process.env.PASSWORD)
console.log("PORT", process.env.PORT)
console.log("PORT", process.env.HOST)
console.log("Dentro do Index", process.env.DATABASE_URL)
const connection = knex({
    client: 'pg',
    connection: {
        user: process.env.USUARIOBANCO,
        password: process.env.PASSWORD,
        port: Number(process.env.PORT),
        host: process.env.HOST,
        database: process.env.DATABASE,
    },
    useNullAsDefault: true,
});

export default connection;

