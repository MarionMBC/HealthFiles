import { Router } from "express";
import { getTest } from "../controllers/test.crtl.js";

const router = Router();


router.get('/get', getTest);

export default router;
