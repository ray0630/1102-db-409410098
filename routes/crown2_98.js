var express = require('express');
var router = express.Router();

const Category_98 = require('../models/Category_98');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try{
    let results = await Category_98.fetchAll();
    console.log('results',JSON.stringify(results));
  }catch(err){
    console.log(err);
  }

  res.render('crown2_98/index', { 
    data: results,  
    id: '409410098', 
    title: 'crown2'
  });
});

module.exports = router;
