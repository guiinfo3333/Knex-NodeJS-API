import { Request, Response, NextFunction } from 'express';
import knex from '@database/index'

class ContatoController {

    async create(req: Request, res: Response, next: NextFunction) {
        const { nome, email, mensagem } = req.body;
        console.log(req.body)
        console.log("nome :" + email)
        try {
            await knex('faleconosco').insert({
                nome,
                email,
                mensagem
            })
            return res.status(201).json({ "error": false })  //criando e o send vazio
        }
        catch (err) {
            console.log(err)
            next(err)
        }
    }

}

export default ContatoController;