import React, { useEffect, useState } from "react"
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { readDeck, listCards, deleteCard } from "../utils/api";
import CardList from "./CardList";

function DeckOverviewPage() {
  const [deck, setDeck] = useState(null);
  const [cards, setCards] = useState([]);
  const { deckId } = useParams();

  useEffect(() => {
    (async () => {
      const localDeck = await readDeck(deckId);
      const currentDeckCards = await listCards(deckId);
      setDeck(localDeck);
      setCards(currentDeckCards);
    })()
  }, [deckId])

  if (!deck) {
    return null;
  }

  const onDeleteCard = async (card) => {
    await deleteCard(card.id);
    setCards(cards.filter((currentCards) =>
      currentCards.id !== card.id));
  }

  return (
    <div className="container">
      <h2>{deck.name}</h2>
      <h3>{deck.description}</h3>
      <Link
        to={`/decks/${deck.id}/edit`}
        className="btn btn-secondary mr-2"
        title="Edit deck"
      >
        <span className="oi oi-pencil"></span>
      Edit
      </Link>
      <Link
        to={`/decks/${deck.id}/study`}
        className="btn btn-primary mr-2"
        title="Study deck"
      >
        <span className="oi oi-book"></span>
        Study
      </Link>
      <Link
        to={`/decks/${deck.id}/cards/new`}
        className="btn btn-primary"
        title="Add Card"
      >
        <span className="oi oi-plus"></span>
        Add Cards
      </Link>
      <button
        className="btn btn-danger float-right"
        title="Delete deck"
        onClick={onDeleteCard}
      >
        <span className="oi oi-trash"></span>
      </button>
      <h4>Cards</h4>
      <CardList
        cards={cards}
        onDeleteCard={onDeleteCard}

      />
    </div>
  )
}

export default DeckOverviewPage;