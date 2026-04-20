import db from '../models/index.js';
//const db = require('../models/index.js');

const { Category } = db;

export async function getAll(req, res){
   // res.send("Get all categories");
    try {
        const categories = await Category.findAll();
        //console.log(categories);
        res.status(200).json(categories);
    } catch(error){
        res.status(500).json(error);
    }
}

export async function create(req, res){
    //res.send("Create a new category");
    try {
        const category = await Category.create(req.body);
        res.status(201).json(category);
    } catch(error){
        res.status(500).json(error);
    }
}


// export async function getAll(req, res) {
//     try {
//         const categories = await Category.findAll({
//             include: 'recipes' // Include associated recipes
//         });
//         res.json(categories);
//     } catch (error) {
//         console.error('Error fetching categories:', error);
//         res.status(500).json({ error: 'An error occurred while fetching categories.' });
//     }   
// }
