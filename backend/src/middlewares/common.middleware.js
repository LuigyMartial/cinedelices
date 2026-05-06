export function validateId(req, res, next){
    // on transforme notre id en entier
    const id = parseInt(req.params.id);
    // si ce n'est pas un entier
    if(!Number.isInteger(id)){
        return res.status(400).json({ error: "Invalid id" });
    }
    // si tout est bon, je laisse la requête continuer
    next();
}

// déclare un middleware d'erreurs grace au paramètre err.
export function errorHandle(err, req, res, next){
    res.status(500).json({
        error: true,
        message: err.message,
        details: err.stack
    });

    next();
}