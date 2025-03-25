const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./config/db')
const productRoutes = require("./routes/productRoutes");


const app = express()

app.use(express.json())
app.use(cors())
connectDB()

app.use("/api/products", productRoutes);

app.get('/' ,(req, res) => {
    res.send('API is Running')
})

const PORT = process.env.PORT
app.listen(PORT , () => console.log(`Server running in ${PORT}`));