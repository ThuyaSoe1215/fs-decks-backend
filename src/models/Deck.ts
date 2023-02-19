import mongoose from "mongoose"

const Schema = mongoose.Schema;

const DeckSchema = new Schema({
  title: String
}, {
  timestamps: true,
  collection: "Decks"
});

const DeckModel = mongoose.model("Deck", DeckSchema);

export default DeckModel;