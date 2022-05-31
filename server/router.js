import Router from "express";
import listController from "./listController.js";

const router = new Router();

router.post("/lists", listController.create);
router.get("/lists", listController.getAll);
router.get("/lists/:id", listController.getOne);
router.put("/lists", listController.update);
router.delete("/lists/:id", listController.delete);

export default router;
