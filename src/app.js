const express = require('express');
const mongoose = require('mongoose');
const userRouter = require("./routes/users.router")
const productRouter = require("./routes/products.router")

const app = express();
const port = 8080;




app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

app.use(express.json())

//conexión a mongoose server
mongoose.connect("mongodb+srv://jaimevalenciav:Infoadmin08@ecommerce.rt5ptyc.mongodb.net/?retryWrites=true&w=majority")
    .then (() => {
        console.log("Conectado a la base de MongoDB")
    })
    .catch(error => {
        console.log("Error en la conexion de MongoDB", error)
    })


app.use("/api/users", userRouter)
app.use("/api/products", productRouter)