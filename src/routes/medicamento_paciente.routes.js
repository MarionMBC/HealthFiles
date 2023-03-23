/**
 * Autor: Jennebier Esther Alvarado López
 * 20191000717
 * Fecha: 22/03/2023
 */

import {Router} from 'express';
import { deleteMedicamentoPaciente, getMedicamentoPaciente } from '../controllers/medicamento_paciente.ctrl';

const router = Router();

router.get('/get/:dni_paciente', getMedicamentoPaciente);
router.delete('/delete/:dni_paciente/:codigo_medicamento', deleteMedicamentoPaciente);


export default router;
