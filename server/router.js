import Router from "express";
import ColumnController from "./ColumnController.js";

const router = new Router();

router.post("/columns", ColumnController.create);
router.get("/columns", ColumnController.getAll);
router.get("/columns/:id", ColumnController.getOne);
router.put("/columns", ColumnController.update);
router.delete("/columns/:id", ColumnController.delete);

export default router;
