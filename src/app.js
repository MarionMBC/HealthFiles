import express, { json } from "express";
const app = express();
import medicoRoute from './routes/medicos.routes.js'; 
import medicamentoRoute from './routes/medicamentos.routes.js';
import pacienteRoute from './routes/pacientes.routes.js';
import citaRoute from './routes/citas.routes.js';

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
app.use('/paciente', pacienteRoute);
app.use('/cita', citaRoute);

app.use((req, res, next)=> {
    res.status(404).json({
        msg: 'Endpoint not found'
    })
})

export default app;