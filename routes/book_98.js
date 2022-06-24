const { json } = require('express');
var express = require('express');
var router = express.Router();

const db = require('../utils/database');

/* GET home page. */
router.get('/', async (req, res, next) => {
    try{
        const results = await db.query('SELECT * FROM book_98');
        console.log('results',JSON.stringify(results.rows));
        res.render('book_98/index', { 
            data: results.rows,
            id: '409410098',
            name: '林品睿' 
        });
    }catch(err){
        console.log('err',error);
    }
});

module.exports = router;
