import { Router } from "express";
import * as projectsController from "../controllers/projects.controller";

const router = Router();

router.get("/", projectsController.getAll);
router.get("/:id", projectsController.getOne);

export default router;
