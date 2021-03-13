
exports.up = knex => knex.schema.createTable('categoriaproduto',table =>{
    table.increments('id')
    table.text('nome').notNullable()
    table.text('descricao').notNullable()
})


exports.down = knex => knex.schema.dropTable('categoriaproduto')

