var express = require('express');
const { route } = require('express/lib/application');
const req = require('express/lib/request');
var router = express.Router();

const Category_98 = require('../models/Category_98');
const Shop_98 = require('../models/Shop_98');

const crown2controller_98 = require('../controllers/crown2Controller_98');

// CREATE
router.post('/product_98', crown2controller_98.createProducts);

// READ
router.get('/', crown2controller_98.getCategories);
router.get('/shop_98/:category', crown2controller_98.getProductByCategory);

// UPDATE

// DELETE
router.delete('/product_98/:id', crown2controller_98.deleteProducts);

module.exports = router;
