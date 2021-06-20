import { Request, Response, NextFunction } from 'express';
import knex from '../database/index'

class CategoriaProdutoController {

    async index(req: Request, res: Response) {
        const results = await knex('categoriaproduto')
        return res.json(results)
    }

    async create(req: Request, res: Response, next: NextFunction) {
        const { nome, descricao } = req.body;
        try {
            await knex('categoriaproduto').insert({
                nome,
                descricao
            })
            return res.status(201).send()  //criando e o send vazio
        }
        catch (err) {
            next(err)
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        const { nome, descricao } = req.body;
        const { id } = req.params;
        try {
            await knex('categoriaproduto').update({
                nome,
                descricao
            }).where({ id })
            return res.send()
        }
        catch (err) {
            next(err)
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params
            await knex('categoriaproduto').where({ id }).del()
            return res.send();
        }
        catch (err) {
            next(err);
        }
    }

}

export default CategoriaProdutoController;