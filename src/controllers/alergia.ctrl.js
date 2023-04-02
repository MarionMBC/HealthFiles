import { pool } from '../db/config.js';


/**
 * @author Bryan Fernández
 * @version 1.1
 * @date abril de marzo de 2023
 *
 * Obtiene la información de un alergia por código.
 *
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 *
 * @returns {Object} Información del alergia o un mensaje de error si no se encuentra.
 */
export const getAlergia = async (req, res) =>{
   try {
       const codigo_alergia = req.params.codigo_alergia;
       const [alergia] = await pool.query("Select * from healthfiles.alergia where codigo_alergia=?", [codigo_alergia]);
       alergia.length==0 ? res.status(400).send("El alergia no existe.") : res.status(400).send(alergia[0]);
   } catch (error) {
       res.status(400).send(
           error
       )
   }
}

/**
 * @Author: Bryan Ferández
 * @Date: 2023-03-20
 * @Version: 1.0
 *
 * Obtiene todas alergias de la tabla alergia en la base de datos HealthFiles
 *
 * @param {object} req - El objeto de solicitud HTTP
 * @param {object} res - El objeto de respuesta HTTP
 * @returns {object} Retorna un objeto con el resultado de la consulta
 */
export const getAlergias = async (req, res) => {
    try {
        const [result] = await pool.query("Select * from healthfiles.alergia");
        return res.send(result);
    } catch (error) {
        console.log(error);
        return res.status(404).json ({
            msg:'No se encontró la información'
        })    
    }
}

/**
 @autor Bryan Fernandez
 @date 2023-03-20
 @version 1.1
 @description Agrega un alergia a la base de datos.
 @param {Object} req - Objeto que contiene la petición HTTP.
 @param {Object} res - Objeto que contiene la respuesta HTTP.
 @returns {Object} - Objeto JSON que indica si se agregó correctamente el alergia.
 @throws {Object} - Objeto JSON que indica si ocurrió un error al agregar el alergia.
 */

export const createAlergia = async (req, res) => {
    console.log('He');
    try {
        const {
            codigo_alergia,
            nombre_alergia,
            } = req.body;
            const alergia = await pool.query(
                "INSERT INTO healthfiles.alergia (codigo_alergia, nombre_alergia) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", 
            [
           codigo_alergia,
           nombre_alergia
            ]
            );
            console.log(alergia);
            return res.status(200).json({
                msg: "alergia agregado correctamente."
            });
            } 
    
    
    catch (error) {
        console.log(error.sqlMessage);
        const { code, sqlState, errno , sqlMessage } = error
        res.status(400).json({
            "Error": code,
            "Número de error": errno, 
            "Estado de la consulta SQL": sqlState,
            "Descripción de error": sqlMessage
        })
    }
}

/**

 @Author: Bryan Fernandez
 @Date: 2023-03-20
 @Version: 1.0
 @param {object} req - Objeto de solicitud HTTP.
 @param {object} res - Objeto de respuesta HTTP.
 @returns {object} - Objeto de respuesta HTTP con los detalles del alergia actualizado.
 @description Actualiza un alergia existente en la base de datos.
 */
export const updateAlergia = async (req, res) => {
    try {
        const codigo_alergia_req = req.params.codigo_alergia;
        const {codigo_alergia,
        nombre_alergia} = req.body;
        const [alergia] =await pool.query ("Update alergia set codigo_alergia=IFNULL(?, codigo_alergia), nombre_alergia=IFNULL(?, nombre_alergia) where codigo_alergia = ?",
        [
            codigo_alergia,
            nombre_alergia
        ]);
        if(alergia.affectedRows == 0) { res.status(400).send(
            "El alergia no existe."
        ) }  else
        {
            const [result]  = await pool.query("Select * from alergia where codigo_alergia= ?", [req.params.codigo_alergia]);
            res.status(200).send (result[0]);
        }
    } catch (error) {
        return res.status(400).json(
            error
        )
        
    }
}

/**

 @Author: Bryan Fernandez
 @Date: 2023-03-18
 @Version: 1.0
 @param {object} req - Objeto de solicitud HTTP.
 @param {object} res - Objeto de respuesta HTTP.
 @returns {object} - Objeto de respuesta HTTP con los detalles del alergia eliminado.
 @description Elimina un alergia existente de la base de datos.
 */
export const deleteAlergia = async (req, res) => {
    try {
        const codigo_alergia = req.params.codigo_alergia;
        const [result] = await pool.query("Select * from healthfiles.alergia where codigo_alergia= ?", [codigo_alergia]);
        const [alergia] =await pool.query( "Delete from healthfiles.alergia where codigo_alergia = ?", [codigo_alergia]);
        if (alergia.affectedRows == 0) {
            res.status(200).send("El alergia no existe");
        } else {
            res.status(400).send(result[0]);
        }
    } catch (error) {
        res.status(200).send(error)
    }
}


export const logAlergia = async () => {
    try {
        return;
    } catch (error) {

    }
}




