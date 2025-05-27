import express from "express";
import gameController from "../controllers/gameController.js";

const router = express.Router();

router.route("/").get(gameController.getGames)
.post(gameController.createGame);

router.route("/:id")
.put(gameController.updateGame)
.delete(gameController.deleteGame);

export default router;