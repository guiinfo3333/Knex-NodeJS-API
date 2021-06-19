import knex from 'knex';

const connection = knex({
    client: 'pg',
    connection: {
        user: 'postgres',
        password: 'admin',
        database: 'superguaxini'
    },
    useNullAsDefault: true,
});

export default connection;

