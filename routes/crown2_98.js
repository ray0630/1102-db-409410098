var express = require('express');
const { route } = require('express/lib/application');
var router = express.Router();

const Category_98 = require('../models/Category_98');
const Shop_98 = require('../models/Shop_98');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try{
    let results = await Category_98.fetchAll();
    console.log('results',JSON.stringify(results));
    res.render('crown2_98/index', { 
      data: results,  
      id: '409410098', 
      title: 'crown2_db'
    });
  }catch(err){
    console.log(err);
  }
});

router.get('/shop_98/:category', async function(req,res){
  console.log('category',req.params.category);
  try{
    const cid = await Category_98.fetchCatidByName(req.params.category);
    console.log("cid",cid);
    const results = await Shop_98.fetchProductByCategory(cid);
    console.log("results",JSON.stringify(results));
  }catch(err){
    console.log(err);
  }
});

module.exports = router;
