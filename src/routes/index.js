const { Router } = require('express')
const router = Router();
const recipesSchema = require("../models/recipes")

router.get('/', (req, res) => {
    const data = {
        "service2": "Consultar receta"
    }
    res.send(data)
})

//crear recetas
router.post('/recipes', (req, res) => {
    const recipes = recipesSchema(req.body);
    recipes
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

// get all recipes
router.get('/recipes', (req, res) => {
    recipesSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//get a recipe
router.get('/recipes/:id', (req, res) => {
    const { id } = req.params
    recipesSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//update a recipe
router.put('/recipes/:id', (req, res) => {
    const { id } = req.params
    const { Nombre, Tipologia, Origen, Autor, Fecha, Ingredientes, Acompañamiento, Procedimiento } = req.body;
    recipesSchema
        .updateOne({ _id: id }, { $set: { Nombre, Tipologia, Origen, Autor, Fecha, Ingredientes, Acompañamiento, Procedimiento } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//delete a recipe
router.delete('/recipes/:id', (req, res) => {
    const { id } = req.params
    recipesSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})


module.exports = router;