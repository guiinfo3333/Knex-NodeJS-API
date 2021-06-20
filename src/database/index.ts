import knex from 'knex';
import dotenv from 'dotenv';
dotenv.config();


console.log(process.env.HOST)
console.log(process.env.DATABASE)
console.log(process.env.USUARIO)
console.log(process.env.PASSWORD)
console.log(process.env.PORT)
const connection = knex({
    client: 'pg',
    connection: {
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    },
    useNullAsDefault: true,
});

export default connection;

