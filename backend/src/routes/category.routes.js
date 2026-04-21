import express from 'express';
import { getAll, create, getById, deleteById } from '../controllers/category.controller.js';

const router = express.Router();
// Route qui permet de récupérer toutes les catégories
router.get('/', getAll);
// Route qui permet de créer une nouvelle catégorie
router.post('/', create);
// Route qui permet de récupérer une catégorie par son id
router.get('/:id', getById);
// Route qui permet de supprimer une catégorie par son id
router.delete('/:id', deleteById);


export default router;