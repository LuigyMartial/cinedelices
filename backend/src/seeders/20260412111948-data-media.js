'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
    // Insert media (films and series) - 14 total for rich carousel
    const mediaItems = [
        {
            title: 'Ratatouille',
            type: 'film',
            image_url: 'https://image.tmdb.org/t/p/w500/npHNjldbeTHdKKw28bJKs7lzqzj.jpg',
            release_year: 2007,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            title: 'The Godfather',
            type: 'film',
            image_url: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
            release_year: 1972,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            title: 'Julie & Julia',
            type: 'film',
            image_url: 'https://image.tmdb.org/t/p/w500/lJxEZkvLCLwVdsMFBQFGFjQmqGx.jpg',
            release_year: 2009,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            title: 'Breaking Bad',
            type: 'serie',
            image_url: 'https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
            release_year: 2008,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            title: 'Game of Thrones',
            type: 'serie',
            image_url: 'https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg',
            release_year: 2011,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            title: 'Pulp Fiction',
            type: 'film',
            image_url: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
            release_year: 1994,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            title: 'Amélie',
            type: 'film',
            image_url: 'https://image.tmdb.org/t/p/w500/nSxDa3ppafARKLYnuX6PZvSdAq6.jpg',
            release_year: 2001,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            title: 'Chocolat',
            type: 'film',
            image_url: 'https://image.tmdb.org/t/p/w500/hzrvolvKbwJDEapjmHsLOiAPvJK.jpg',
            release_year: 2000,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            title: 'Big Night',
            type: 'film',
            image_url: 'https://image.tmdb.org/t/p/w500/sOqB812jWYgcHCyT2PVEk3RBtSm.jpg',
            release_year: 1996,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            title: 'Babette\'s Feast',
            type: 'film',
            image_url: 'https://image.tmdb.org/t/p/w500/lMwXhJLrHLKtvEaWFlWzhDXudEb.jpg',
            release_year: 1987,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            title: 'Eat Drink Man Woman',
            type: 'film',
            image_url: 'https://image.tmdb.org/t/p/w500/yL1rYMHlqZtZVESxEWLsaneXq86.jpg',
            release_year: 1994,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            title: 'The Grand Budapest Hotel',
            type: 'film',
            image_url: 'https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg',
            release_year: 2014,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            title: 'Jiro Dreams of Sushi',
            type: 'film',
            image_url: 'https://image.tmdb.org/t/p/w500/rIwvnqfsdkiP8ueJhYRGllYoLXi.jpg',
            release_year: 2011,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            title: 'Willy Wonka',
            type: 'film',
            image_url: 'https://image.tmdb.org/t/p/w500/vmpsZkrs4Uvkp9r1atqZOdTsdgS.jpg',
            release_year: 1971,
            created_at: new Date(),
            updated_at: new Date()
        }
    ];

    const existingMedia = await queryInterface.sequelize.query(
        `SELECT title FROM media WHERE title IN (:titles)`,
        {
            replacements: { titles: mediaItems.map((item) => item.title) },
            type: Sequelize.QueryTypes.SELECT
        }
    );

    const existingTitles = new Set(existingMedia.map((item) => item.title));
    const mediaToInsert = mediaItems.filter((item) => !existingTitles.has(item.title));

    if (mediaToInsert.length > 0) {
        await queryInterface.bulkInsert('media', mediaToInsert, {});
    }

    // // Query actual IDs from inserted users, categories, and media
    // const [media] = await queryInterface.sequelize.query(
    //   `SELECT id, title FROM media ORDER BY id`
    // );
    // // Map to get IDs
    // const ratatouille = media.find(m => m.title === 'Ratatouille');
    // const godfather = media.find(m => m.title === 'The Godfather');
    // const julieJulia = media.find(m => m.title === 'Julie & Julia');
    // const breakingBad = media.find(m => m.title === 'Breaking Bad');
    // const gameOfThrones = media.find(m => m.title === 'Game of Thrones');
    // const pulpFiction = media.find(m => m.title === 'Pulp Fiction');
    // const amelie = media.find(m => m.title === 'Amélie');
    // const chocolat = media.find(m => m.title === 'Chocolat');
    // const bigNight = media.find(m => m.title === 'Big Night');
    // const babetteFeast = media.find(m => m.title === 'Babette\'s Feast');
    // const eatDrinkManWoman = media.find(m => m.title === 'Eat Drink Man Woman');
    // const grandBudapest = media.find(m => m.title === 'The Grand Budapest Hotel');
    // const jiroSushi = media.find(m => m.title === 'Jiro Dreams of Sushi');
    // const willyWonka = media.find(m => m.title === 'Willy Wonka');        
}
export async function down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('media', {
        title: [
            'Ratatouille',
            'The Godfather',
            'Julie & Julia',
            'Breaking Bad',
            'Game of Thrones',
            'Pulp Fiction',
            'Amélie',
            'Chocolat',
            'Big Night',
            'Babette\'s Feast',
            'Eat Drink Man Woman',
            'The Grand Budapest Hotel',
            'Jiro Dreams of Sushi',
            'Willy Wonka'
        ]
    }, {});
}

