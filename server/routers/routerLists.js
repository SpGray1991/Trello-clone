import Router from "express";
import listController from "../controllers/listController.js";

const routerLists = new Router();

routerLists.post("/lists", listController.create);
routerLists.get("/lists", listController.getAll);
routerLists.get("/lists/:id", listController.getOne);
routerLists.put("/lists/:id", listController.update);
routerLists.patch("/lists", listController.updateListOrder);
routerLists.delete("/lists/:id", listController.delete);

export default routerLists;
