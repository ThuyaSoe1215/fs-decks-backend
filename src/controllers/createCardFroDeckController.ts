import { Request, Response } from "express";
import DeckModel from "../models/Deck";

export const createCardFroDeckController = async (
  req: Request,
  res: Response
) => {
  const deckId = req.params.deckId;
  const deck = await DeckModel.findById(deckId);

  if (deck === null) return res.status(400).send("no deck of this Id exist");

  const { text } = req.body;
  deck.cards.push(text);
  await deck.save();
  res.json(deck);
};
