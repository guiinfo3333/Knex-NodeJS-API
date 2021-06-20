import { Request, Response, NextFunction } from 'express';
import knex from '../database/index'

class ProdutoController {

    async Index(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await knex('produtos')
            return result
        }
        catch (err) {
            next(err);
        }

    }

    async selectId(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params
            const { page = 1 } = req.query;
            const query = knex('produtos')
                .limit(15)
                .offset((Number(page) - 1) * 15)

            if (id) {
                console.log(id);
                query.where({ 'categoriaproduto.id': id })
                    .join('categoriaproduto', 'categoriaproduto.id', '=', 'produtos.categoria_id')
                    .select('produtos.*')
                // .select('produtos.*', 'categoriaproduto.nome')  //tudo de produtos e categoria o nome
            }

            const [count] = await knex('produtos').count()
            console.log(count)
            const results = await query;
            res.header('X-Total-Count', String(count["count"]))
            return res.json(results)

        }
        catch (err) {
            next(err);
        }

    }

    async create(req: Request, res: Response, next: NextFunction) {
        const { image, nome, preco, categoria_id } = req.body;
        try {
            await knex('produtos').insert({
                image,
                nome,
                preco,
                categoria_id,
            })
            return res.status(201).send()  //criando e o send vazio
        } catch (err) {
            next(err)
        }

    }

    async update(req: Request, res: Response, next: NextFunction) {
        const { image, nome, preco } = req.body;
        const { id } = req.params;
        try {
            await knex('produtos').update({ image, nome, preco }).where({ id })
            return res.send()
        } catch (err) {
            next(err)
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params
            await knex('produtos').where({ id }).del()
            return res.send();
        }
        catch (err) {
            next(err);
        }
    }
}

export default ProdutoController;