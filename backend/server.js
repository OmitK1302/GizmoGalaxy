import express from 'express';
/*
    This is the syntax commonjs type which was changed to module(module type follows the above syntax) in the package.json file
    const express = require('express');
*/
import dotenv from 'dotenv';
dotenv.config();

import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js'

const port = process.env.PORT;

connectDB(); // connect to DB

const app = express();

app.get('/', (req,res) => {
    res.send('API is running...');
});

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));

