const { json } = require('express');
var express = require('express');
var router = express.Router();

const db = require('../utils/database');

// CREAT
router.post('/create', async (req, res) => {
    // console.log('body',req.body);
    const id = req.body.id;
    const name = req.body.name;
    const author = req.body.author;
    const price = req.body.price;

    try{
        const query = {
            text: `INSERT INTO book_98 (id, name, author, price) 
            VALUES ($1,$2,$3,$4)`,
            values: [id, name, author, price]
        };
        await db.query(query);
        res.redirect('/book_98');
    }catch(err){
        console.log(error);
    }
});

/* READ */
router.get('/', async (req, res, next) => {
    try{
        const results = await db.query('SELECT * FROM book_98');
        // console.log('results',JSON.stringify(results.rows));
        res.render('book_98/index', { 
            data: results.rows,
            id: '409410098',
            name: '林品睿' 
        });
    }catch(err){
        console.log('err',error);
    }
});

router.get('/create', async (req, res) => {
    res.render('book_98/add_98', { 
        id: '409410098',
        name: '林品睿' 
    });
});

// DELETE
router.get('/delete/:id', async (req, res) => {
    try{
        console.log('delete id',req.params.id);
        const query = {
            text: `DELETE FROM book_98 WHERE id = $1`,
            values: [req.params.id]
        }
        await db.query(query);
        res.redirect('/book_98');
    }catch(err){
        console.log(error);
    }
});

module.exports = router;
