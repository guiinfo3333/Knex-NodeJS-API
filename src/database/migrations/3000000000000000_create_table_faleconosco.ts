import { Knex } from 'knex';


export async function up(knex: Knex) {

    return knex.schema.createTable('faleconosco', table => {
        table.increments('id')
        table.text('nome').notNullable()
        table.text('email').notNullable()
        table.text('mensagem').notNullable()
    })

}

export async function down(knex: Knex) {
    return knex.schema.dropTable('faleconosco');
}




