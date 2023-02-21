import { config } from "dotenv";
config();
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import { getDeckController } from "./controllers/getDeckController";
import { createDeckController } from "./controllers/createDeckController";
import { deleteDeckController } from "./controllers/deleteDeckController";
import { createCardFroDeckController } from "./controllers/createCardForDeckController";

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", true);

app.get("/decks", getDeckController);
app.post("/decks", createDeckController);
app.delete("/decks/:deckId", deleteDeckController);
app.post("/decks/:deckId/cards", createCardFroDeckController);

mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`listening on port ${port}`);
  app.listen(port);
});
