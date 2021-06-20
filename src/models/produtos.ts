import knex from '@database/index'

export class Produtos {
    id: number;
    image: string;
    nome: string;
    preco: number;

    async SelectIdCategoria(id: number): Promise<Produtos[]> {
        try {
            const query = knex('produtos')
            query.where({ 'categoriaproduto.id': id })
                .join('categoriaproduto', 'categoriaproduto.id', '=', 'produtos.categoria_id')
                .select('produtos.*')
            // .select('produtos.*', 'categoriaproduto.nome')  //tudo de produtos e categoria o nome
            const result = await query as Produtos[]

            return result

        } catch (err) {
            return []
        }
    }
    async Index(): Promise<Produtos[]> {
        try {
            const query = knex('produtos')
            const result = await query as Produtos[]
            return result
        } catch (err) {
            return []
        }
    }
}