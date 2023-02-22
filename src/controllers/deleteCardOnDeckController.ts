import { Request, Response } from "express";
import DeckModel from "../models/Deck";

export const deleteCardOnDeckController = async (
  req: Request,
  res: Response
) => {
  const deckId = req.params.deckId;
  const index = req.params.index;
  const deck = await DeckModel.findById(deckId);

  if (!deck) return res.status(400).send("deck of this id does not exist");
  deck.cards.splice(parseInt(index), 1);
  await deck.save();
  res.json(deck);
};
