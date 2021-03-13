const knex = require('../database')

module.exports = {

   async index (req,res,next){

        try{
            const {id,page=1} = req.query;
            const query =knex('produtos')
            .limit(5)
            .offset((page-1)*5)

            if(id){
                console.log(id);
                query.where({'produtos.id':id})
                .join('categoriaproduto','categoriaproduto.id','=','produtos.categoria_id')
                .select('produtos.*','categoriaproduto.nome')  //tudo de produtos e categoria o nome
            }

            const [count] = await knex('produtos').count()
            console.log(count)
            const results = await query;
            res.header('X-Total-Count',count["count"])
            return res.json(results)

        }
        catch(err){
            next(err);
        }

   },

   async create(req,res,next){

        const {image,nome,preco,categoria_id} = req.body;

        try{
            await knex('produtos').insert({
                image,
                nome,
                preco,
                categoria_id,
            })
            return res.status(201).send()  //criando e o send vazio

        }catch(err){
            next(err)
        }
       
   },
   async update(req,res,next){
       const {image,nome,preco} = req.body;
       const {id} = req.params;

       try{
        await knex('produtos').update({image,nome,preco}).where({id})
        return res.send()

       }catch(err){
        next(err)

       }
   },
   async delete(req,res,next){
       try{
           const{id} = req.params

           await knex('produtos').where({id}).del()
           return res.send();

       }
       catch(err){
           next(err);
       }
   }
}