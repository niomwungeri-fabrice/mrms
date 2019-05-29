import { Router } from "express";

import authRouters from "./authRoutes";

const router = Router();

router.use(authRouters);

export default router;
