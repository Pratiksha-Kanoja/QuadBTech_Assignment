import { Router } from "express";
import hodlinforouter from "./Hodlinfo.routes.js";

const router = Router();

router.use('/info',hodlinforouter);

export default router;