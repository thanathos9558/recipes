const mongoose = require("mongoose");

const recipesSchema = mongoose.Schema({

    Nombre: {
        type: String,
        required: true
    },
    Tipologia: {
        type: String,
        required: false
    },
    Origen: {
        type: String,
        required: false
    },
    Autor: {
        type: String,
        required: false
    },
    Fecha: {
        type: String,
        required: false
    },
    Ingredientes: {
        type: Object,
        required: false
    },
    tiempo_coccion: {
        type: String,
        required: false
    },
    Acompañamiento: {
        type: Object,
        required: false
    },
    Procedimiento: {
        type: String,
        required: false
    },
    valoracion: {
        type: String,
        required: false
    }

});

module.exports = mongoose.model('Recipes', recipesSchema)