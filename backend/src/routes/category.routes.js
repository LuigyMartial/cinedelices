import express from 'express';
import { getAll, create, getById, deleteById, update } from '../controllers/category.controller.js';
import { validateId } from '../middlewares/common.middleware.js';
import { validateCategoryCreation, validateCategoryUpdate } from '../middlewares/category.middleware.js';

const router = express.Router();
// Route qui permet de récupérer toutes les catégories
router.get('/', getAll);
// Route qui permet de créer une nouvelle catégorie
router.post('/', validateCategoryCreation, create);
// Route qui permet de récupérer une catégorie par son id
router.get('/:id', validateId, getById);
// Route qui permet de supprimer une catégorie par son id
router.delete('/:id', validateId, deleteById);
// Route qui permet de mettre à jour une catégorie par son id
router.patch('/:id', validateId, validateCategoryUpdate, update);


export default router;
