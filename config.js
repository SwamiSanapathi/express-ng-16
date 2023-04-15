import mysql from 'mysql';

// Create a MySQL connection pool
export const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'master'
});
