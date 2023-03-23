import express, { json } from "express";
const app = express();
import medicoRoute from './routes/medicos.routes.js'; 
import medicamentoRoute from './routes/medicamentos.routes.js';
import pacienteRoute from './routes/pacientes.routes.js';
import citaRoute from './routes/citas.routes.js';
import medico_cirugiaRoute from './routes/medico_cirugia.routes.js';
import examenRoute from './routes/examen.routes.js';
import medicamento_pacienteRoute from './routes/medicamento_paciente.routes.js';

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
app.use('/alergia', alergiaRoute);
app.use('/hospital', hospitalRoute);
app.use('/medico_cirugia', medico_cirugiaRoute);
app.use('/examen', examenRoute);
app.use('/medicamento_paciente', medicamento_pacienteRoute);

app.use((req, res, next)=> {
    res.status(404).json({
        msg: 'Endpoint not found'
    })
})

export default app;