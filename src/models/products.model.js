const mongoose = require('mongoose')

const productCollection = "products"

const productSchema = new mongoose.Schema({
    nombre : {type: String, required: true, max: 200},
    categoria: {type: String, required: true, max: 100},
    precio: {type: Number, required: true},
    stock: {type: Number, required: true},
    image: {type: String, required: true, max: 500}
})

const productModel = mongoose.model(productCollection, productSchema);
module.exports = {productModel}