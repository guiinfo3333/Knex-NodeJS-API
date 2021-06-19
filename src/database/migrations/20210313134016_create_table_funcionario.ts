import { Knex } from 'knex';

export async function up(knex: Knex) {

    return knex.schema.createTable('funcionario', table => {
        table.increments('id')
        table.text('username').notNullable()
        table.text('login').notNullable()
        table.text('password').notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })

}

export async function down(knex: Knex) {
    return knex.schema.dropTable('funcionario');

}
