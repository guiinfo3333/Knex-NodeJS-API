import knex from 'knex';
import dotenv from 'dotenv';
dotenv.config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
})


console.log(process.env.DATABASE)
console.log(process.env.PASSWORD)
console.log(process.env.PORT)
const connection = knex({
    client: 'pg',
    connection: {
        user: process.env.USUARIOBANCO,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    },
    useNullAsDefault: true,
});

export default connection;

