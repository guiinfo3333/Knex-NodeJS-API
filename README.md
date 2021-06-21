# Super Guaxinixi

npm i knex pg express
npx knex init //executa o knex na maquina
npx knex migrate:make create_table_funcionario
npx knex migrate:latest 
npx knex migrate:rollback
npx knex seed:make 001_funcionario
npx knex seed:run //rodando as seeds

npx knex seed:run --specific 0.02project.js //roda seed especifica


yarn add eslint -D //roda eslint
yarn run eslint --init //inicia eslint
yarn add tsconfig-paths -D //roda o path para melhorar as importacoes


heroku pg:psql --app superguaxini   //entrando no pos
heroku logs --tail  //log do que ta acontecendo no heroku

heroku run bash