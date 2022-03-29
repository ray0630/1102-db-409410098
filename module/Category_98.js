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
            let result = await db.query('SELECT * from category_98')
            console.log('results',result.rows)
            return result;
        } catch(err){
            console.log('error',err)
        }
    }
}

// testing
const test = async() => {
    let result = await Category_98.fetchAll();
    console.log('results',JSON.stringify(result.rows));
}

test();

module.exports = Category_98;