import React, { useEffect, useState } from "react";
import { deleteDeck, listDecks } from "../utils/api";
import DeckItem from "./DeckItem";

function DeckList() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    listDecks()
      .then((data) => setDecks(data));
  })

  async function onDeleteDeck({ deck }) {
    try {
      await deleteDeck(deck.id);
      setDecks(decks.filter((currentDeck) =>
        currentDeck.id !== deck.id));
    } catch (err) {
      console.log(err)
    }
  }
  onDeleteDeck();

  return (
    <ul className="list-group my-2">
      {decks.map((deck) => (
        <DeckItem
          key={deck.id}
          deck={deck}
          onDeleteDeck={onDeleteDeck}
        />
      ))}
    </ul>
  )
}


export default DeckList;