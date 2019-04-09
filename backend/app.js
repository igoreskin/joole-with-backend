const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Product = require('./models/product');

const app = express();

mongoose.connect("mongodb+srv://igoreskin:MongoDB20@cluster0-kbdpm.mongodb.net/joole?retryWrites=true")
.then(() => {
    console.log('Connected to database');
})
.catch(() => {
    console.log('Connection failed');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
});

app.post("/api/products", (req, res, next) => {
    const product = new Product({
        image: req.body.image,
        name: req.body.name,
        series: req.body.series,
        code: req.body.code,
        technical_data:req.body.technical_data,
        // airflow: req.body.technical_data.airflow,
        // power: req.body.technical_data.power,
        // noise: req.body.technical_data.noise,
        // size: req.body.technical_data.size,
        past: req.body.past
    });
    console.log(product);
    product.save();
    res.status(201).json({
        message: 'Product added successfully'
    });
});

app.get('/api/products', (req, res, next) => {
    Product.find()
    .then(documents => {
        console.log(documents);
        res.status(200).json({
            message: 'Products fetched successfully',
            products: documents
        });
    });
});


module.exports = app;