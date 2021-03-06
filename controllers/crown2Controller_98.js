
const Category_98 = require('../models/Category_98');
const Shop_98 = require('../models/Shop_98');

// CREATE
exports.createProducts = async (req, res) => {
    console.log('body', req.body);
    try{
        let results = await Shop_98.create(req.body);
        console.log('results',JSON.stringify(results));
        res.json({ 
            msg: 'create -- body data received',
            data: results
        });
    }catch(err){
        console.log('err', err)
    }
}

// READ
exports.getCategories = async (req, res) => {
    try{
        let results = await Category_98.fetchAll();
        // console.log('results',JSON.stringify(results));
        res.render('crown2_98/index', { 
          data: results,  
          id: '409410098', 
          title: "Crown2_DB"
        });
    }catch(err){
        console.log(err);
    }
}

exports.getProductByCategory = async (req, res) => {
    console.log('category',req.params.category);
    try{
        const cid = await Category_98.fetchCatidByName(req.params.category);
        // console.log("cid",cid);
        // const results = Shop_98.fetchProductByCategory(cid);
        let results = await Shop_98.fetchProductByCategory(cid);
        // console.log("results",JSON.stringify(results));
        res.render('crown2_98/product', { 
        data: results,  
        name: "林品睿",
        id: '409410098', 
        title: req.params.category
        });
    }catch(err){
        console.log(err);
    }
}

// UPDATE
exports.updateProducts = async (req, res) => {
    console.log('body',req.body);
    try{
        let results = await Shop_98.update(req.body);
        res.json({
            msg: 'Update successful',
            data: results
        })
    }catch(err){
        console.log(err);
    }
}

// DELETE
exports.deleteProducts = async(req, res) => {
    console.log('delete id',req.params.id);
    try{
        const results = await Shop_98.deleteById(req.params.id);
        res.json({
            msg: 'Delection successful',
            data: results
        });
    }catch(err){
        console.log(err);
    }
}