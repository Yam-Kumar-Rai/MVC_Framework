const pgp = require('pg-promise')();
require('dotenv').config();
const db = pgp({
host: process.env.DB_HOST || 'localhost',
port: 5432, 
database: process.env.DB_NAME || 'onlineBookStore_db', 
user: process.env.DB_USER || 'postgres', 
password: process.env.DB_PASS || '07230089' });
module.exports = db;