'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        email: 'alice@example.com',
        password: 'hash1', // Remplace par un hash réel si besoin
        role: 'client',
        nom: 'Alice Martin',
        telephone: '0601010101',
        type_professionnel: null,
        created_at: new Date()
      },
      {
        email: 'bob@pro.com',
        password: 'hash2', // Remplace par un hash réel si besoin
        role: 'professionnel',
        nom: 'Bob DuPro',
        telephone: '0602020202',
        type_professionnel: 'plombier',
        created_at: new Date()
      },
      {
        email: 'admin@example.com',
        password: 'hash3', // Remplace par un hash réel si besoin
        role: 'admin',
        nom: 'Admin Test',
        telephone: null,
        type_professionnel: null,
        created_at: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};