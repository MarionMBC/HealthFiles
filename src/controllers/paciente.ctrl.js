/**
 * Autor: Jennebier Esther Alvarado López
 * 20191000717
 * Fecha: 16/03/2023
 */

import { pool } from "../db/config.js";

/**
 * Autor: Jennebier Esther Alvarado López
 * Fecha: 16/03/2023
 * @param {Object} req Objeto de petición
 * @param {Object} res Objeto de respuesta
 * @throws {error} Captura el error, muestra en consola y da respuesta
 * @returns {JSON} Los registros completos de la tabla paciente
 */
export const getPacientes = async (req, res) =>{
    try{
        const [result] = await pool.query("SELECT * FROM paciente");
        return res.send(result);
    } 
    catch (error){
        console.log(error); 
        res.status(500);
        res.json({ msg: 'Error al obtener los registros de la tabla "paciente".' });
    }
};


