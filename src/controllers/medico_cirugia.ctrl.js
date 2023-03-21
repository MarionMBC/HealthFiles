/**
 * Autor: Rony Josue Gomez Oyuela
 * 20171004489
 * fecha: 20/03/2023
 */

import { pool } from "../db/config.js";

/**
 * @author Rony Josue Gomez Oyuela
 * @date 20/03/2023
 * @description Obtener todos los registros de la tabla Medico_cirugia 
 * @param {Object} req Objeto de petición
 * @param {Object} res Objeto de respuesta
 * @returns {JSON} Los registros completos de la tabla paciente
 */
export const getMedicosCirugias = async (req, res) =>{
    try{
       const codigo_cirugia =req.params.codigo_cirugia; 
       const medico_cirugia = await pool.query("SELECT codigo_cirugia, a.dni_medico, primer_nombre ,primer_apellido, fecha from medico a inner join medico_cirugia b on a.dni_medico = b.dni_medico where codigo_cirugia=?", [codigo_cirugia]);
       return res.send(citas); 
    } 
    catch (error){
        res.status(500);
        res.json({ msg: `Error al obtener los registros de la tabla "medico_cirugia". Error: ${error}` });
    }
};

/**
 * @author Rony Josue Gomez Oyuela
 * @date 20/03/2023
 * @description Eliminar un registro de la tabla "medico_cirugia" dado su codigo_cirugia
 * @param {Object} req Petición al servidor
 * @param {Object} res Respuesta del servidor 
 * @returns {Json} mensaje de error caso contrario mensaje de proceso satisfactorio
 */
export const deleteMedicoCirugia = async (req, res) => {
    try {
        const codigo = req.params.codigo_cita;
        const [cita] = await pool.query("DELETE FROM medico_cirugia WHERE codigo_cirugia=?", [codigo_cirugia]);
        if(cita.affectedRows == 0 ){ 
            res.status(404).json({ msg: "No se encontró el registro a eliminar" })
        }else{
            res.status(200).json({ok: true,msg: "El registro se ha eliminado correctamente."});
        }
    } catch (error) {
        return res.status(500).json({
            msg: `Algo ha salido mal al eliminar el registro de la tabla medico_cirugia ${codigo}. Error: ${error}`
        })
    }
};
