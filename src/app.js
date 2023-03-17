import express, { json } from "express";
const app = express();
import medicoRoute from './routes/medicos.routes.js'; 
import medicamentoRoute from './routes/medicamentos.routes.js';

/** ---------------- 
 * Middlewares
-------------------*/
/**
 * Permite leer el body de las solicitudes
 */
app.use(express.json());
/** 
 * Monta el enrutador de medico en la aplicación Express en la ruta "/medico".
 */
app.use('/medico', medicoRoute);
app.use('/medicamento', medicamentoRoute);



app.use((req, res, next)=> {
    res.status(404).json({
        msg: 'Endpoint not found'
    })
})

export default app;