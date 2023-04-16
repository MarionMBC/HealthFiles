import {pool} from '../db/config.js';

/**
 * @author Jennebier Esther Alvarado López
 * @date 7 de abril del 2023
 * @description Obtniene los hospitales donde atiende un médico en especifico
 * @param {} req 
 * @param {} res 
 */
export const getHospitalesMedico = async (req, res) => {
    try {
        const dni = req.params.dni_medico;
        const [hospitales] = await pool.query("SELECT * FROM medico_hospital mh INNER JOIN hospital h ON h.codigo_hospital=mh.codigo_hospital where mh.dni_medico = ?", [dni])
        if (hospitales.length === 0) {
            res.status(404).json({
                msg: "Hospitales no encontrados."
            });
        }
        {
            res.send(hospitales);
        }
    } catch (e) {
        res.send(500).json({
            msg: `Algo ha salido mal al obtener los hospitales donde atiende el médico ${dni}.`
        })
    }
};

export const getMedicos = async (req, res) => {
    try {
        const codigo_hospital = req.params.codigo_hospital;
        const [medicos] = await pool.query("Select * from medico_hospital where codigo_hospital = ?", [codigo_hospital])
        if (medicos.length === 0) {
            res.status(404).json({
                msg: "Hospital no encontrado."
            });
        }
        {
            res.send(medicos);
        }
    } catch (e) {
        res.send(500).json({
            msg: `Algo ha salido mal al obtener lo médicos del hospital ${codigo_hospital}. \n ${e}`
        })
    }
};


export const deleteMedicoHospital = async (req, res) => {
    try {
        const codigo_hospital = req.params.codigo_hospital;
        const dni_medico = req.params.dni_medico;
        const [medico] = await pool.query("delete * from healthfiles.medico_hospital where dni_medico = ? and codigo_hospital = ?", [dni_medico, codigo_hospital]);
        if (medico.affectedRows === 0) {
            res.status(404).json({
                msg: "No se encontró el registro"
            });
        } else {
            res.status(200).json({
                ok: true, msg: "El registro se ha eliminado correctamente"
            });
        }
    } catch (e) {
        res.status(500).json({
            msg: `Algo ha salido mal al eliminar el registro. Error: ${e}`
        });
    }
};


