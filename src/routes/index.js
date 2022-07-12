import { Router } from "express";
import { getPdf } from "../controllers/getpdfController.js";

const router = Router();


router.post('/pdf/create', getPdf);

export default router;
