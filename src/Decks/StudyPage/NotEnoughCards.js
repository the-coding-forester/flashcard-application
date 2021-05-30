import React from "react";
import { Link } from "react-router-dom";

function NotEnoughCards({ deckId, deckLength }) {


  return (
    <div>
      <h5>Not Enough Cards</h5>
      <p>You need at least 3 cards to study. There are {deckLength} cards in this deck.</p>
      <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary">Add Cards</Link>
    </div>
  )
}

export default NotEnoughCards;