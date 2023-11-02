const { Pool } = require('pg');

const pool = new Pool({
    host: 'node-crud.cbz5ptmm2anu.us-east-1.rds.amazonaws.com',
    user: 'postgres',
    password: '12345678',
    database: 'node-crud',
})