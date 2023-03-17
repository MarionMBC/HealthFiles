import { pool } from '../db/config.js';

export const getMedicamento = async (req, res) =>{
   try {
    
   } catch (error) {
    
   }
}


export const getMedicamentos = async (req, res) => {
    try {
        const [result] = await pool.query("Select * from healthfiles.medicamento");
        return res.send(result);
    } catch (error) {
        console.log(error);
        return res.status(404).json ({
            msg:'No se encontró la información'
        })    
    }
}

export const createMedicamento = async (req, res) => {
    try {
        const {
            codigo_medicamento,
            dni_medico,
            nombre,
            estado,
            nivel_importancia,
            fecha_inicial,
            fecha_final,
            cantidad_principio_act,
            cantidad_tomar,
            frecuencia } = req.body;

            const medicamento = await pool.query(
                "INSERT INTO medicamento (codigo_medicamento, dni_medico, nombre, estado, nivel_importancia, fecha_inicial, fecha_final, cantidad_principio_act, cantidad_tomar, frecuencia) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", 
            [
            codigo_medicamento,
            dni_medico,
            nombre,
            estado,
            nivel_importancia,
            fecha_inicial,
            fecha_final,
            cantidad_principio_act,
            cantidad_tomar,
            frecuencia
            ]
            );
            res.send (req.body);
            } 
    
    
    
    catch (error) {

    }
}

export const updateMedicamento = async () => {
    try {
        
    } catch (error) {
        
    }
} 

export const deleteMedicamento = async () => {
    try {
        return
    } catch (error) {
        
    };
}


export const logMedicamento = async () => {
    try {
        return;
    } catch (error) {
        
    }
}




