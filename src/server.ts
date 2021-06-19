import express from 'express'
import routes from './routes';
import { Request, Response, NextFunction } from 'express';
import path from 'path';


const app = express()
app.set('view engine', 'ejs');
app.use(express.json())
app.use(routes)
app.use(express.static(path.join(__dirname, "..", "public")))
app.get('/alimentos', function (req, res) {
    res.render('alimentos.ejs', {});
});
app.get('/bebidas', function (req, res) {
    res.render('bebidas.ejs', {});
});
app.get('/cadastro', function (req, res) {
    res.render('cadastro.ejs', {});
});
app.get('/contato', function (req, res) {
    res.render('contato.ejs', {});
});
app.get('/ferramentas', function (req, res) {
    res.render('ferramentas.ejs', {});
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
app.get('/limpeza', function (req, res) {
    res.render('limpeza.ejs', {});
});
app.get('/login', function (req, res) {
    res.render('login.ejs', {});
});
app.get('/menu', function (req, res) {
    res.render('menu.ejs', {});
});
app.get('/teste', function (req, res) {
    res.render('teste.ejs', {});
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

