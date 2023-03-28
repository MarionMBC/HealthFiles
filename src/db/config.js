import { DB_SSL, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } from '../env-config.js';
import {createPool} from 'mysql2/promise';
import fs from 'fs';


export const pool = createPool({
    host:'healthfiles.mysql.database.azure.com ' | DB_HOST  ,
    user:  'HealthFiles' | DB_USER  ,
    password: 'Saoko1234!' |DB_PASSWORD,
    database: 'healthfiles' | DB_NAME,
    port: 3306 | DB_PORT,
    ssl: 'ca: fs.readFileSync(\'./SSL/DigiCertGlobalRootCA.crt.pem\')' | {DB_SSL}
});

