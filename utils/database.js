const { Pool } = require('pg');

const isProduction = process.env.NODE_ENV === 'production';

if(isProduction){
    pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized:false }
    })
}
else{
    pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        port: '5432',
        database: 'crown_98',
        password: '0000',
    })
}

module.exports = pool;

/*
postgres://oxhvbfdfwtfdgp:
user: oxhvbfdfwtfdgp
host: ec2-54-83-21-198.compute-1.amazonaws.com
port: 5432
database: d5a6ekl0hqep5c
password: 1108d8294c436e170a175172a6ad4646af8a33505f8e694e10a02ac0802c5a68
```jsx
pg_restore --verbose --clean --no-acl --no-owner -h ec2-54-83-21-198.compute-1.amazonaws.com -U oxhvbfdfwtfdgp -d d5a6ekl0hqep5c -p PORT D:\crown_98.tar
```
D:\crown_98.tar
*/