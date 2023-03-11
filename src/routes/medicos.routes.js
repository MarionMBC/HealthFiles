import {Router} from 'express';
import { createMedico, deleteMedico, getMedico, getMedicos, updateMedico } from '../controllers/medico.ctrl.js';

const router = Router();


router.get('/get', getMedicos);
router.get('/get/:dni_Medico', getMedico);
router.post('/create', createMedico);
router.patch('/update/:dni_Medico', updateMedico);
router.delete('/delete/:dni_Medico', deleteMedico);


export default router;