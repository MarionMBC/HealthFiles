import { Router } from 'express';
import { createMedicamento, deleteMedicamento, getMedicamento, getMedicamentos, updateMedicamento } from '../controllers/medicamento.ctrl.js';

const router = Router();


router.get ('/get', getMedicamentos);
router.get ('/get/:codigo_medicamento', getMedicamento);
router.post ('/create', createMedicamento );
router.patch ('/updateMedicamento', updateMedicamento);
router.delete ('/deleteMedicamento', deleteMedicamento);

export default router;








