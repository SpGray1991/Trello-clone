import Router from "express";
import cardController from "../controllers/cardController.js";

const routerCards = new Router();

routerCards.post("/cards", cardController.create);
routerCards.get("/cards", cardController.getAll);
routerCards.get("/cards/:id", cardController.getOne);
routerCards.put("/cards", cardController.update);
routerCards.delete("/cards/:id", cardController.delete);

export default routerCards;