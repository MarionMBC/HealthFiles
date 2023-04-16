import { pool } from '../db/config.js';


/**
 * @author Bryan Fernández
 * @version 1.1
 * @date 20 de marzo de 2023
 *hospital
 * Obtiene la información de una hospital por código.
 *
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 *
 * @returns {Object} Información de el hospital
  o un mensaje de error si no se encuentra.
 */
export const getHospital = async (req, res) =>{
   try {
       const codigo_hospital = req.params.codigo_hospital;
       const [hospital] = await pool.query("Select * from healthfiles.hospital where codigo_hospital=?", [codigo_hospital]);
       hospital.length==0 ? res.status(400).send("El hospital no existe.") : res.status(400).send(hospital[0]);
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
 * Obtiene todos las hospitals de la tabel hospital
  en la base de datos HealthFiles
 *
 * @param {object} req - El objeto de solicitud HTTP
 * @param {object} res - El objeto de respuesta HTTP
 * @returns {object} Retorna un objeto con el resultado de la consulta
 */
export const getHospitales = async (req, res) => {
    try {
        const [result] = await pool.query("Select * from healthfiles.hospital");
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
 @description Agrega una hospital a la base de datos.
 @param {Object} req - Objeto que contiene la petición HTTP.
 @param {Object} res - Objeto que contiene la respuesta HTTP.
 @returns {Object} - Objeto JSON que indica si se agregó correctamente el hospital.
 @throws {Object} - Objeto JSON que indica si ocurrió un error al agregar el hospital.
 */

export const createHospital = async (req, res) => {
    console.log('He');
    try {
        const {
            codigo_hospital,
            nombre_hospital,
            } = req.body;
            const hospital = await pool.query(
                "INSERT INTO healthfiles.hospital (codigo_hospital, nombre_hospital) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", 
            [
           codigo_hospital,
           nombre_hospital
            ]
            );
            console.log(hospital);
            return res.status(200).json({
                msg: "hospital agregado correctamente."
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
 @returns {object} - Objeto de respuesta HTTP con los detalles de el hospital actualizado.
 @description Actualiza una hospital existente en la base de datos.
 */
export const updateHospital = async (req, res) => {
    try {
        const codigo_hospital_req = req.params.codigo_hospital;
        const {codigo_hospital,
        nombre_hospital} = req.body;
        const [hospital] =await pool.query ("Update hospital set codigo_hospital=IFNULL(?, codigo_hospital), nombre_hospital=IFNULL(?, nombre_hospital) where codigo_hospital = ?",
        [
            codigo_hospital,
            nombre_hospital
        ]);
        if(hospital.affectedRows == 0) { res.status(400).send(
            "El hospital no existe."
        ) }  else
        {
            const [result]  = await pool.query("Select * from hospital where codigo_hospital= ?", [req.params.codigo_hospital]);
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
 @returns {object} - Objeto de respuesta HTTP con los detalles de el hospital eliminado.
 @description Elimina una hospital existente de la base de datos.
 */
export const deleteHospital = async (req, res) => {
    try {
        const codigo_hospital = req.params.codigo_hospital;
        const [result] = await pool.query("Select * from healthfiles.hospital where codigo_hospital= ?", [codigo_hospital]);
        const [hospital] =await pool.query( "Delete from healthfiles.hospital where codigo_hospital = ?", [codigo_hospital]);
        if (hospital.affectedRows == 0) {
            res.status(200).send("El hospital no existe");
        } else {
            res.status(400).send(result[0]);
        }
    } catch (error) {
        res.status(200).send(error)
    }
}


export const logHospital = async () => {
    try {
        return;
    } catch (error) {
    }
}




