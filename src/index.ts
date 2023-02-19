import { config } from "dotenv"
config()
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import DeckModel from "./models/Deck";

const port = 3000;
const app = express();
app.use(express.json())

mongoose.set("strictQuery", true);

app.get("/", (req: Request, res: Response) => {
  res.send("hello word");
});

app.post("/decks", async (req: Request, res: Response) => {
  const newDeck = new DeckModel({
    title: req.body.title
  });
  const createdDeck = await newDeck.save();
  res.json(createdDeck);
})

mongoose
  .connect(process.env.MONGO_URL!)
  .then(() => {
    console.log(`listening on port ${port}`);
    app.listen(port);
  });
