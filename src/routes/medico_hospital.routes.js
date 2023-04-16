import {Router} from 'express';
import { getHospitalesMedico, getMedicoHospital } from '../controllers/medico_hospital.ctrl.js';
const router = Router();

//router.get('/getMedico/:dni_medico', getMedicoHospital);
 //router.get('/getMedicos', getMedicoHospital);
 router.get('/getHospitales/:dni_medico',getHospitalesMedico);
// router.post('/createMedico_hospital', ()=>{});
// router.patch('/updateMedico_hospital', ()=>{});
// router.delete('/deleteMedico_hospital', ()=>{});

export default router;