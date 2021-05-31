import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Layout/Breadcrumb";
import { readDeck, deleteCard, deleteDeck } from "../../utils/api";
import CardList from "./CardList";

function DeckOverviewPage() {
  const [deck, setDeck] = useState(null);
  const { deckId } = useParams();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const localDeck = await readDeck(deckId);
      setDeck(localDeck);
    })()
  }, [deckId])

  if (!deck) {
    return null;
  }

  const onDeleteDeck = async () => {
    await deleteDeck(deck.id);
    history.push("/");
  }

  const onDeleteCard = async (card) => {
    await deleteCard(card.id);
    setDeck({
      ...deck,
      cards: deck.cards.filter((currentCard) => currentCard.id !== card.id)
    });
  }

  const pathArray = [{ name: `${deck.name}`, link: `decks/${deck.id}` }]
  console.log(deck)

  return (
    <div className="container">
      <Breadcrumb
        pathArray={pathArray}
      />
      <h2>{deck.name}</h2>
      <p>{deck.description}</p>
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
        onClick={onDeleteDeck}
      >
        <span className="oi oi-trash"></span>
      </button>
      <div className="mt-4 card-list">
        <h4>Cards</h4>
        <CardList
          cards={deck.cards}
          onDeleteCard={onDeleteCard}
        />
      </div>
    </div>
  )
}

export default DeckOverviewPage;