const { Router } = require('express');
const { productModel } = require('../models/products.model')
const router = Router()

router.get("/", async (req, res) => {
    try {
        let users = await productModel.find()
        res.send({result: "success", payload: users})
    } catch (error) {
        console.log(error)
    }
})

router.post("/", async(req, res) => {
    let {nombre, categoria, precio, stock, image} = req.body
    if (!nombre || !categoria || !precio || !stock || !image) {
        res.send({status: "error", error: "Faltan parámetros"})
    }
    let result = await productModel.create({nombre, categoria, precio, stock, image})
    res.send({result: "success", payload: result})
})

router.put("/:pid", async (req, res) =>{
    let {pid} = req.params
    let productToReplace = req.body
    if(!productToReplace.nombre || !productToReplace.categoria || !productToReplace.precio || !productToReplace.stock || !productToReplace.image) {
        res.send({status: "error", error: "Faltan parámetros"})
    }
    let result = await productModel.updateOne({_id : pid}, productToReplace)
    res.send({result: "success", payload: result})
})

router.delete("/:pid", async (req, res) => {
    let {pid} = req.params
    let result = await productModel.deleteOne({_id: pid})
    res.send({result: "success", payload: result})
})


module.exports = router