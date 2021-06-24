import knex from 'knex';
import dotenv from 'dotenv';
dotenv.config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
})


console.log(process.env.DATABASE)
console.log(process.env.PASSWORD)
console.log(process.env.PORT)
console.log("Dentro do Index", process.env.DATABASE_URL)
const connection = knex({
    client: 'pg',
    connection: {
        user: process.env.USUARIOBANCO,
        password: process.env.PASSWORD,
        // host: process.env.HOST,
        database: process.env.DATABASE,
    },
    useNullAsDefault: true,
});

export default connection;

