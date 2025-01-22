import express from 'express';
const router = express.Router();
import {getProduct, getProductById} from '../controllers/productController.js';
// import products from '../data/products.js';


router.route('/').get(getProduct);
router.route('/:id').get(getProductById);

export default router;