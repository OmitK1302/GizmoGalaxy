import express from 'express';
/*
    This is the syntax commonjs type which was changed to module(module type follows the above syntax) in the package.json file
    const express = require('express');
*/
import dotenv from 'dotenv';
dotenv.config();
import products from './data/products.js';

const port = process.env.PORT;

const app = express();


app.get('/', (req,res) => {
    res.send('API is running...');
});

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});

app.listen(port, () => console.log(`Server is running on port ${port}`));

