
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('funcionario').del()
    .then(function () {

      return knex('funcionario').insert([
        {username:'guilherme',login:"oi",password:"iorior"},
     
      ]);
    });
};
