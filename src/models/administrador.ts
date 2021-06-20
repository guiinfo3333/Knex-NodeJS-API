import knex from '../database/index'

export class Administrador {
    id: BigInt;
    username: string;
    login: string;
    password: string;

    async InsertAdministador(administador: Administrador): Promise<boolean> {
        try {
            await knex('administrador').insert(
                administador
            )
            return true
        } catch (err) {
            return false
        }
    }
}