import { Request, Response } from "express";
import DeckModel from "../models/Deck";

export const getDecksController = async (req: Request, res: Response) => {
  const decks = await DeckModel.find();
  res.json(decks);
};
