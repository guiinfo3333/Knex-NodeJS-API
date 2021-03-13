
const express = require('express');

const AdministradorController = require('./controllers/AdministradorController');
const FuncionarioController = require("./controllers/FuncionarioController")
const CategoriaController = require("./controllers/CategoriaProdutoController")
const ProdutosController = require("./controllers/ProdutoController")
const routes = express.Router();

///fucionario
routes.get('/funcionario',FuncionarioController.index)
routes.post('/funcionario',FuncionarioController.create)
routes.put('/funcionario/:id',FuncionarioController.update)
routes.delete('/funcionario/:id',FuncionarioController.delete)

//administrador
routes.get('/administrador',AdministradorController.index)
routes.post('/administrador',AdministradorController.create)
routes.put('/administrador/:id',AdministradorController.update)
routes.delete('/administrador/:id',AdministradorController.delete)


//categoriaproduto
routes.get('/categoriaproduto',CategoriaController.index)
routes.post('/categoriaproduto',CategoriaController.create)
routes.put('/categoriaproduto/:id',CategoriaController.update)
routes.delete('/categoriaproduto/:id',CategoriaController.delete)

//produtos
routes.get('/produtos',ProdutosController.index)
routes.post('/produtos',ProdutosController.create)
routes.put('/produtos/:id',ProdutosController.update)
routes.delete('/produtos/:id',ProdutosController.delete)

module.exports = routes; 