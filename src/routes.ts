import express from 'express'

import AdministradorController from './controllers/AdministradorController';
import FuncionarioController from './controllers/FuncionarioController'
import CategoriaController from './controllers/CategoriaProdutoController'
import ProdutosController from './controllers/ProdutoController.'
import ContatoController from './controllers/ContatoController'
const administradorController = new AdministradorController();
const funcionarioController = new FuncionarioController();
const categoriaController = new CategoriaController();
const produtosController = new ProdutosController();
const contatoController = new ContatoController();
const routes = express.Router();

///fucionario
routes.get('/funcionario', funcionarioController.index)
routes.post('/funcionario', funcionarioController.create)
routes.put('/funcionario/:id', funcionarioController.update)
routes.delete('/funcionario/:id', funcionarioController.delete)

//administrador
routes.post('/administrador', administradorController.create)
routes.get('/administrador', administradorController.index)
routes.put('/administrador/:id', administradorController.update)
routes.delete('/administrador/:id', administradorController.delete)


//categoriaproduto
routes.get('/categoriaproduto', categoriaController.index)
routes.post('/categoriaproduto', categoriaController.create)
routes.put('/categoriaproduto/:id', categoriaController.update)
routes.delete('/categoriaproduto/:id', categoriaController.delete)

//produtos
routes.get('/produtos', produtosController.Index)
routes.get('/produtos/:id', produtosController.selectId)
routes.post('/produtos', produtosController.create)
routes.put('/produtos/:id', produtosController.update)
routes.delete('/produtos/:id', produtosController.delete)

//produtos
routes.post('/contato', contatoController.create)


export default routes;