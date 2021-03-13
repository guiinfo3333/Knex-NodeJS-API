
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('produtos').del()
    .then(function () {
      // Inserts seed entries
      return knex('produtos').insert([
        {image: "image1", nome: 'carne friboi',preco:1.30,categoria_id:2},
  
      ]);
    });
};
