import { pool } from '../db/config.js';

export const getMedicamento = async (req, res) =>{
   try {
       const codigo_medicamento = req.params.codigo_medicamento;
       const [medicamento] = await pool.query("Select * from healthfiles.medicamento where codigo_medicamento=?", [codigo_medicamento]);
       medicamento.length==0 ? res.status(400).send("El medicamento no existe.") : res.status(400).send(medicamento[0]);
   } catch (error) {
       res.status(400).send(
           error
       )
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
    console.log('He');
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
                "INSERT INTO healthfiles.medicamento (codigo_medicamento, dni_medico, nombre, estado, nivel_importancia, fecha_inicial, fecha_final, cantidad_principio_act, cantidad_tomar, frecuencia) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", 
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
            console.log(medicamento);
            return res.status(200).json({
                msg: "Medicamento agregado correctamente."
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

export const updateMedicamento = async (req, res) => {
    try {
        const codigo_medicamento_req = req.params.codigo_medicamento;
        const {codigo_medicamento,
        dni_medico,
        nombre,
        estado,
        nivel_importancia,
        fecha_inicial,
        fecha_final,
        cantidad_principio_act,
        cantidad_tomar,
        frecuencia } = req.body;
        const [medicamento] =await pool.query ("Update medicamento set codigo_medicamento=IFNULL(?, codigo_medicamento), dni_medico = IFNULL(?, dni_medico ), nombre= IFNULL(?, nombre), estado=IFNULL(?, estado), nivel_importancia = IFNULL(?, nivel_importancia), fecha_inicial = IFNULL(?, fecha_inicial), fecha_final = IFNULL(?, fecha_final), cantidad_principio_act = IFNULL(?, cantidad_principio_act), cantidad_tomar = IFNULL(?, cantidad_tomar), frecuencia = IFNULL(?, frecuencia)  where codigo_medicamento = ?",
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
            frecuencia,
            codigo_medicamento_req
        ]);
        if(medicamento.affectedRows == 0) { res.status(400).send(
            "El medicamento no existe."
        ) }  else
        {
            const [result]  = await pool.query("Select * from medicamento where codigo_medicamento= ?", [req.params.codigo_medicamento]);
            res.status(200).send (result[0]);
        }
    } catch (error) {
        return res.status(400).json(
            error
        )
        
    }
} 

export const deleteMedicamento = async (req, res) => {
    try {
        const codigo_medicamento = req.params.codigo_medicamento;
        const [medicamento] =await pool.query( "Delete from medico where codigo_medicamento = ?", [codigo_medicamento]);
        medicamento.length==0? res.status(400).send("El medicamento no existe.") : res.status(200).send(medicamento[0])
    } catch (error) {
        res.status.send(error)
    }
}


export const logMedicamento = async () => {
    try {
        return;
    } catch (error) {
        
    }
}




