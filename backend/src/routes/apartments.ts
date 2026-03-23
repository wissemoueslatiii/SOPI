import { Router } from "express";
import { requireAuth } from "../middleware/auth";
import * as apartmentsController from "../controllers/appartments.controler";

const router = Router();

router.get("/", apartmentsController.getAll);
router.get("/:projectId/:idAppartement", apartmentsController.getOne);
// Admin
router.post("/", requireAuth, apartmentsController.create);
router.put("/:id", requireAuth, apartmentsController.update);
router.delete("/:id", requireAuth, apartmentsController.remove);

export default router;
