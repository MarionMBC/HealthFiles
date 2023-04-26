/**
 * Autor: Jennebier Esther Alvarado López
 * 20191000717
 * Fecha: 22/03/2023
 */

import {Router} from 'express';
import { createMedicamentoPaciente, deleteMedicamentoPaciente, getMedicamentoPaciente, getMedicamentosMed, updateMedicamentoPaciente } from '../controllers/medicamento_paciente.ctrl.js';

const router = Router();

router.get('/get/:dni_paciente', getMedicamentoPaciente);
router.get('/get/:dni_medico', getMedicamentosMed);
router.post('/create', createMedicamentoPaciente);
router.patch('/update/:dni_paciente/:codigo_medicamento', updateMedicamentoPaciente);
router.delete('/delete/:dni_paciente/:codigo_medicamento', deleteMedicamentoPaciente);


export default router;
