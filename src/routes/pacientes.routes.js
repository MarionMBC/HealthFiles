/**
 * Autor: Jennebier Esther Alvarado López
 * 20191000717
 * Fecha: 16/03/2023
 */

import {Router} from 'express';
import { getPacientes } from '../controllers/paciente.ctrl.js';

const router = Router();

router.get('/get', getPacientes);


export default router;
