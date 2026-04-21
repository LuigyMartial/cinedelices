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

export async function getById(req, res){
    //res.send("Get a category by id");
    try {
        const id = req.params.id;
        const category = await Category.findByPk(id);

        if(!category){
            return res.status(404).json({error: "Category not found"});
        }
        res.status(200).json(category);

    } catch(error){
        res.status(500).json(errror);
    }
}

