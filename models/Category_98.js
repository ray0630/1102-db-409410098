const db = require('../utils/database');

const Category_98 = class Category_98{

    constructor(id, name, size, remote_url, local_url, link_url){
        this.id = id;
        this.name = name;
        this.size = size;
        this.remote_url = remote_url;
        this.local_url = local_url;
        this.link_url = link_url;
    }

    //get all categories

    static async fetchAll(){
        try{
            let results = await db.query('SELECT * from Category_98');
            //console.log('fetchAll results',JSON.stringify( results.rows));
            return results.rows;
        } catch(err){
            console.log('error',err)
        }
    }
}

// testing
// const test = async() => {
//     let results = await Category_98.fetchAll();
//     console.log('test results',JSON.stringify(results));
// }

// test();

module.exports = Category_98;