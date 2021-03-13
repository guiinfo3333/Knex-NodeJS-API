exports.up = knex => knex.schema.createTable('administrador',table =>{
    table.increments('id')
    table.text('username').notNullable()
    table.text('login').notNullable()
    table.text('password').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
})


exports.down = knex => knex.schema.dropTable('administrador')
