'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const categories = [
      {
          name: 'Appetizer',
          description: 'Dishes to start the meal',
          created_at: new Date(),
          updated_at: new Date()
      },
      {
          name: 'Main Course',
          description: 'Hearty main dishes',
          created_at: new Date(),
          updated_at: new Date()
      },
      {
          name: 'Dessert',
          description: 'Sweet treats to end the meal',
          created_at: new Date(),
          updated_at: new Date()
      },
      {
          name: 'Beverage',
          description: 'Cocktails and drinks inspired by cinema',
          created_at: new Date(),
          updated_at: new Date()
      }
    ];

    const existingCategories = await queryInterface.sequelize.query(
      `SELECT name FROM categories WHERE name IN (:names)`,
      {
        replacements: { names: categories.map((category) => category.name) },
        type: Sequelize.QueryTypes.SELECT
      }
    );

    const existingNames = new Set(existingCategories.map((category) => category.name));
    const categoriesToInsert = categories.filter((category) => !existingNames.has(category.name));

    if (categoriesToInsert.length > 0) {
      await queryInterface.bulkInsert('categories', categoriesToInsert, {});
    }

    // // Query actual IDs from inserted users, categories, and media
    // const [categories] = await queryInterface.sequelize.query(
    //   `SELECT id, name FROM categories ORDER BY id`
    // );

    // // Map to get IDs
    // const appetizer = categories.find(c => c.name === 'Appetizer');
    // const mainCourse = categories.find(c => c.name === 'Main Course');
    // const dessert = categories.find(c => c.name === 'Dessert');
    // const beverage = categories.find(c => c.name === 'Beverage');

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', {
      name: ['Appetizer', 'Main Course', 'Dessert', 'Beverage']
    }, {});
  }
};
