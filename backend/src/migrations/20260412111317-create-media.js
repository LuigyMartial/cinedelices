'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Create media table
    await queryInterface.createTable('media', {
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
      },
      title: {
          type: Sequelize.STRING(255),
          allowNull: false
      },
      type: {
          type: Sequelize.ENUM('film', 'serie'),
          allowNull: false
      },
      image_url: {
          type: Sequelize.STRING(500),
          allowNull: true
      },
      release_year: {
          type: Sequelize.INTEGER,
          allowNull: true
      },
      created_at: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Media');
  }
};