import { Router } from 'express';
import { createMedico, deleteMedico, getMedico, getMedicos, updateMedico, getUserMedico } from '../controllers/medico.ctrl.js';

const router = Router();


router.get('/get', getMedicos);
router.get('/get/:dni_medico', getMedico);
router.get('/signIn/:correo_electronico/:contrasena', getUserMedico);
router.post('/create', createMedico);
router.patch('/update/:dni_medico', updateMedico);
router.delete('/delete/:dni_medico', deleteMedico);

export default router;


