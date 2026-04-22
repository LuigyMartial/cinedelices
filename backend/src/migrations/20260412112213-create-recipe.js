'use strict';
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
    // Create recipes table
    await queryInterface.createTable('recipes', {
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
        description: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        ingredients: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        instructions: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        anecdote: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        difficulty: {
            type: Sequelize.ENUM('facile', 'moyen', 'difficile'),
            allowNull: false,
            defaultValue: 'moyen'
        },
        prep_time: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        cook_time: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        image_url: {
            type: Sequelize.STRING(500),
            allowNull: true
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        category_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'categories',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
        },
        media_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'media',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
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

    // Add indexes for performance
    await queryInterface.addIndex('recipes', ['user_id']);
    await queryInterface.addIndex('recipes', ['category_id']);
    await queryInterface.addIndex('recipes', ['media_id']);
    await queryInterface.addIndex('recipes', ['title']);
}
export async function down(queryInterface, Sequelize) {
    await queryInterface.dropTable('recipes');
}