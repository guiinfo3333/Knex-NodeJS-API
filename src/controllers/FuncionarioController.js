const knex = require('../database')

module.exports = {

   async index (req,res){

       const results = await knex('funcionario')
       return res.json(results)

   },

   async create(req,res,next){

        const {username,login,password} = req.body;

        try{
            await knex('funcionario').insert({
                username,
                login,
                password
            })
            return res.status(201).send()  //criando e o send vazio

        }catch(err){
            next(err)
        }
       
   },
   async update(req,res,next){
       const {username,password} = req.body;
       const {id} = req.params;

       try{
        await knex('funcionario').update({username,password}).where({id})
        return res.send()

       }catch(err){
        next(err)

       }
   },
   async delete(req,res,next){
       try{
           const{id} = req.params

           await knex('funcionario').where({id}).del()
           return res.send();

       }
       catch(err){
           next(err);
       }
   }
}