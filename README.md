# Super Guaxinixi

npm i knex pg express
npx knex init //executa o knex na maquina
npx knex migrate:make create_table_funcionario
npx knex migrate:latest 
npx knex migrate:rollback
npx knex seed:make 001_funcionario
npx knex seed:run //rodando as seeds

npx knex seed:run --specific 0.02project.js //roda seed especifica