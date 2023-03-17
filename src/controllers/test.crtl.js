import {pool}  from '../db/config.js';

export const getTest = async (req, res)=>{
    try {
        let [result] = await pool.query("Select * from test");
        return res.send(result);
    } catch (error) {
        console.log(error);
        return res.status(404).json ({
            mgs: "No se encontró la información"
        });
    }
}

