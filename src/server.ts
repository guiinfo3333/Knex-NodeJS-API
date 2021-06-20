import express from 'express'
import routes from './routes';
import { Request, Response, NextFunction } from 'express';
import { Produtos } from '@models/produtos';
import path from 'path';


const app = express()
app.set('view engine', 'ejs');
app.use(express.json())
app.use(routes)
app.use(express.static(path.join(__dirname, "..", "public")))


app.get('/alimentos', async function (req, res) {
    const produto = new Produtos()
    const produtolis = await produto.SelectIdCategoria(1)
    res.render('alimentos.ejs', { produtos: produtolis });
});
app.get('/bebidas', async function (req, res) {
    const produto = new Produtos()
    const produtolis = await produto.SelectIdCategoria(2)
    res.render('bebidas.ejs', { produtos: produtolis });
});
app.get('/cadastro', async function (req, res) {

    res.render('cadastro.ejs', {});
});
app.get('/contato', function (req, res) {
    res.render('contato.ejs', {});
});
app.get('/ferramentas', async function (req, res) {
    const produto = new Produtos()
    const produtolis = await produto.SelectIdCategoria(4)
    res.render('ferramentas.ejs', { produtos: produtolis });
});
app.get('/frescos', function (req, res) {
    res.render('frescos.ejs', {});
});
app.get('/frutasverduras', function (req, res) {
    res.render('frutaseverduras.ejs', {});
});
app.get('/frescos', function (req, res) {
    res.render('frescos.ejs', {});
});
app.get('/limpeza', async function (req, res) {
    const produto = new Produtos()
    const produtolis = await produto.SelectIdCategoria(3)
    res.render('limpeza.ejs', { produtos: produtolis });
});
app.get('/login', function (req, res) {
    res.render('login.ejs', {});
});
app.get('/menu', function (req, res) {
    res.render('menu.ejs', {});
});
app.get('/teste', async function (req, res) {
    const produto = new Produtos()
    const produtolis = await produto.Index()
    res.render('teste.ejs', { produtos: produtolis });
});
app.get('/ofertas', function (req, res) {
    res.render('Ofertas.ejs', {});
});
app.get('/trabalheconosco', function (req, res) {
    res.render('trabalhe.ejs', {});
});

app.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error('Not Found')
    next(error)
})
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.json({ error: error.message })
})

app.listen(3333, () => console.log('Server is running'))

