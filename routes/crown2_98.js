var express = require('express');
const { route } = require('express/lib/application');
const req = require('express/lib/request');
var router = express.Router();

const Category_98 = require('../models/Category_98');
const Shop_98 = require('../models/Shop_98');

const crown2controller_98 = require('../controllers/crown2Controller_98')

/* GET home page. */
router.get('/', crown2controller_98.getCategories);

router.get('/shop_98/:category', crown2controller_98.getProductByCategory);

module.exports = router;
