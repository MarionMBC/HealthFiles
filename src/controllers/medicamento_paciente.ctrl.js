/**
 * Autor: Jennebier Esther Alvarado López
 * 20191000717
 * Fecha: 22/03/2023
 */

import { pool } from "../db/config.js";

/**
 * @author Jennebier Esther Alvarado López
 * @date 22/03/2023
 * @description Obtener la lista de medicamentos que toma un paciente dado el dni del paciente
 * @param {Object} req Objeto de petición
 * @param {Object} res Objeto de respuesta
 * @returns {Json} El registro solicitado 
 */
export const getMedicamentoPaciente = async (req, res) => {
    try {
    const dni = req.params.dni_paciente; //el valor enviado através de la solicitud HTTP 
    const listado = await pool.query("SELECT med.name FROM medicamento_paciente med_pac INNER JOIN medicamento med ON med_pac.codigo_medicamento = med.codigo_medicamento WHERE dni_paciente = ?", [dni]);
    if (listado.length<=0){ //Verificación de que el objeto no venga vacío
        res.status(404).json({msg: "Medicamentos no encontrados"})
    }else{ //Si no viene vacío
        res.send(listado);
    }
    } catch (error) {
        return res.status(500).json({
            msg: `Algo ha salido mal al obtener el listado de medicamentos del paciente ${dni}. Error: ${error}`
        })
    }
};


/**
 * @author Jennebier Esther Alvarado López
 * @date 22/03/2023
 * @description Eliminar un registro de medicamento_paciente dado su dni_paciente y codigo_medicamento
 * @param {Object} req Petición al servidor
 * @param {Object} res Respuesta del servidor 
 * @returns {Json} mensaje de error caso contrario mensaje de proceso satisfactorio
 */
export const deleteMedicamentoPaciente = async (req, res) => {
    try {
        const dni = req.params.dni_paciente;
        const cod = req.params.codigo_medicamento;
        const [registro] = await pool.query("DELETE FROM medicamento_paciente WHERE dni_Paciente = ? AND codigo_medicamento = ?", [dni, cod]);
        if(registro.affectedRows == 0 ){ //Se verifica que hayan filas afectadas
            res.status(404).json({ msg: "No se encontró el registro" })
        }else{
            res.status(200).json({ok: true,msg: "El registro se ha eliminado correctamente."});
        }
    } catch (error) {
        return res.status(500).json({
            msg: `Algo ha salido mal al eliminar el registro. Error: ${error}`
        })
    }
};