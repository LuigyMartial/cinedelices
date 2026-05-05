import Joi from 'joi';

export function validateCategoryCreation(req, res, next){
    // on définit ici la structure de données attendue.
    const createCategorySchema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string()
    });
    // on execute la validation du body de notre requete via le schema de Joi
    const validation = createCategorySchema.validate(req.body);
    // si il y a une erreur lors de la validation
    if(validation.error){
        return res.status(400).json(validation.error);
    }

    next();
}

export function validateCategoryUpdate(req, res, next){
    const updateCategorySchema = Joi.object({
        name: Joi.string(),
        description: Joi.string()
    });
    // on execute la validation du body de notre requete via le schema de Joi
    const validation = updateCategorySchema.validate(req.body);
    // si il y a une erreur lors de la validation
    if(validation.error){
        return res.status(400).json(validation.error);
    }

    next();

}


