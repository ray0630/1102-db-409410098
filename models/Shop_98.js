const db = require('../utils/database');

const Shop_98 = class Shop_98{

    constructor(id, name, cat_id, price, remote_url, local_url){
        this.id = id;
        this.name = name;
        this.cat_id = cat_id;
        this.price = price;
        this.remote_url = remote_url;
        this.local_url = local_url;
    }

    // CREATE

    static async create(body){
        // console.log('create body',body);
        const {id, name, cat_id, price, remote_url, local_url} = body;
        const query = {
            text: `INSERT INTO shop_98 (id, name, cat_id, price, remote_url, local_url) VALUES ($1,$2,$3,$4,$5,$6)`,
            values: [id, name, cat_id, price, remote_url, local_url]
        };
        return db.query(query);
    }

    // READ
    //get all products
    static async fetchAll(){
        try{
            let results = await db.query(`SELECT * from Shop_98`);
            //console.log('fetchAll results',JSON.stringify( results.rows));
            return results.rows;
        } catch(err){
            console.log('error',err)
        }
    }

    static async fetchProductByCategory(id){
        const query = {
            text: `SELECT * from shop_98 where cat_id = $1`,
            values: [id]
        }
        try{
            let results = await db.query(query);
            return results.rows;
        }catch(err){
            console.log(err);
        }
    }

    // UPDATE
    static async update(body){
        // console.log('update body',body);
        const {id, name, cat_id, price, remote_url, local_url} = body;
        const query = {
            text: `UPDATE shop_98 SET name = $1, cat_id = $2, price = $3,
            remote_url = $4, local_url = $5 WHERE id = $6`,
            values: [name, cat_id, price, remote_url, local_url, id]
        };
        return db.query(query);
    }

    // DELETE
    static async deleteById(id){
        const query = {
            text: `DELETE FROM shop_98 WHERE id = $1`,
            values: [id]
        };
        return db.query(query);
    }
}

// testing
// const test = async() => {
//     let results = await Shop_98.fetchProductByCategory(1);
//     console.log('test results',JSON.stringify(results));
// }

// test();

module.exports = Shop_98;