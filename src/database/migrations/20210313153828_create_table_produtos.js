
exports.up = knex => knex.schema.createTable('produtos',table =>{
    table.increments('id')
    table.text('image').notNullable()
    table.text('nome').notNullable()
    table.float('preco',2).notNullable()

    //relation ships
    table.integer('categoria_id')
    .references('categoriaproduto.id')
    .notNullable()
    .onDelete("CASCADE")  //quando uma categoria for deletada o produto é automaticamente deletado
})


exports.down = knex => knex.schema.dropTable('produtos')

