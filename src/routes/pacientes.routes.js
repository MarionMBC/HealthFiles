/**
 * Autor: Jennebier Esther Alvarado López
 * 20191000717
 * Fecha: 16/03/2023
 */

import {Router} from 'express';
import { createPaciente, deletePaciente, getPaciente, getPacientes, getUsuarioPaciente, updatePaciente } from '../controllers/paciente.ctrl.js';

const router = Router();

router.get('/get', getPacientes);
router.get('/get/:dni_paciente', getPaciente);
router.get('/get/:correo_electronico/:contrasena', getUsuarioPaciente);
router.post('/create', createPaciente);
router.patch('/update/:dni_paciente', updatePaciente);
router.delete('/delete/:dni_paciente', deletePaciente);


export default router;
