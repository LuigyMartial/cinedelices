'use strict';

//const argon2 = require('argon2');

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  // Hash password for demo users
  //const hashedPassword = await argon2.hash('password123');
  const users = [
    {
      email: 'admin@cinedelices.com',
      password: 'admin123',
      username: 'admin',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      email: 'user@cinedelices.com',
      password: 'user123',
      username: 'ChefCinema',
      created_at: new Date(),
      updated_at: new Date()
    }
  ];

  const existingUsers = await queryInterface.sequelize.query(
    `SELECT email FROM users WHERE email IN (:emails)`,
    {
      replacements: { emails: users.map((user) => user.email) },
      type: Sequelize.QueryTypes.SELECT
    }
  );

  const existingEmails = new Set(existingUsers.map((user) => user.email));
  const usersToInsert = users.filter((user) => !existingEmails.has(user.email));

  if (usersToInsert.length > 0) {
    await queryInterface.bulkInsert('users', usersToInsert, {});
  }
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('users', {
    email: ['admin@cinedelices.com', 'user@cinedelices.com']
  }, {});
}
