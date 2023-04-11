import { Router } from 'express';
import {
    createMedicamento,
    deleteMedicamento,
    getMedicamento,
    getMedicamentos,
    getNombreMedicamentos,
    updateMedicamento
} from '../controllers/medicamento.ctrl.js';

const router = Router();


router.get ('/get', getMedicamentos);
router.get ('/get/nombres', getNombreMedicamentos);
router.get ('/get/:codigo_medicamento', getMedicamento);
router.post ('/post', createMedicamento );
router.patch ('/updateMedicamento/:codigo_medicamento', updateMedicamento);
router.delete ('/deleteMedicamento/:codigo_medicamento', deleteMedicamento);

export default router;








