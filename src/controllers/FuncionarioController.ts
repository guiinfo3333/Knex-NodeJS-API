import { Request, Response, NextFunction } from 'express';
import knex from '@database/index'

class FuncionarioController {

    async index(req: Request, res: Response) {
        const results = await knex('funcionario')
        return res.json(results)
    }

    async create(req: Request, res: Response, next: NextFunction) {
        const { username, login, password } = req.body;
        try {
            await knex('funcionario').insert({
                username,
                login,
                password
            })
            return res.status(201).send()  //criando e o send vazio
        } catch (err) {
            next(err)
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        const { username, password } = req.body;
        const { id } = req.params;
        try {
            await knex('funcionario').update({ username, password }).where({ id })
            return res.send()
        } catch (err) {
            next(err)
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params
            await knex('funcionario').where({ id }).del()
            return res.send();
        }
        catch (err) {
            next(err);
        }
    }
}

export default FuncionarioController;