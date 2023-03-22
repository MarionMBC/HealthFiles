/**
 * Autor: Rony Josue Gomez Oyuela
 * 20171004489
 * fecha: 20/03/2023
 */
import { Router } from "express";
import { deleteMedicoCirugia, getMedicosCirugias, } from "../controllers/medicoCirugia.ctrl";

const router = Router();
    router.get('/get', getMedicosCirugias);
    router.delete('/delete/:codigo_cirugia', deleteMedicoCirugia);

export default router;
