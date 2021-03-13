const knex = require('../database')

module.exports = {
    async index (req,res){

        const results = await knex('categoriaproduto')
        return res.json(results)
 
    },
    async create(req,res,next){

        const {nome,descricao} = req.body;

        try{
            await knex('categoriaproduto').insert({
                nome,
                descricao
            })
            return res.status(201).send()  //criando e o send vazio

        }catch(err){
            next(err)
        }
       
   },
   async update(req,res,next){
    const {nome,descricao} = req.body;
    const {id} = req.params;

    try{
     await knex('categoriaproduto').update({nome,descricao}).where({id})
     return res.send()

    }catch(err){
     next(err)

    }
},
async delete(req,res,next){
    try{
        const{id} = req.params

        await knex('categoriaproduto').where({id}).del()
        return res.send();

    }
    catch(err){
        next(err);
    }
}
 


}