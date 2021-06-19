import { Knex } from 'knex';

export async function up(knex: Knex) {

    return knex.schema.createTable('categoriaproduto', table => {
        table.increments('id')
        table.text('nome').notNullable()
        table.text('descricao').notNullable()
    })

}

export async function down(knex: Knex) {
    return knex.schema.dropTable('categoriaproduto');
}


