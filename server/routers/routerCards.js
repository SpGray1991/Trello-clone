import Router from "express";
import cardController from "../controllers/cardController.js";

const routerCards = new Router();

routerCards.post("/cards", cardController.create);
routerCards.get("/cards", cardController.getAll);
routerCards.put("/cards/:id", cardController.update);
routerCards.patch("/cards", cardController.updateCardOrder);
routerCards.delete("/cards/:id", cardController.delete);

export default routerCards;
