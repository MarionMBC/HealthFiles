import { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } from '../env-config.js';
import {createPool} from 'mysql2/promise';


export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: DB_PORT
});

console.log(pool.port);
