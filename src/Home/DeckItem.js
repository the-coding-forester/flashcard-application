import React from "react";
import { Link } from "react-router-dom";

function DeckItem({ deck, onDeleteDeck }) {
  const handleDelete = () => {
    // display confirm dialog and allow cancel
    const doesConfirm = window.confirm("Are you sure you want to delete?");
    // return early to exit out of function if not confirmed
    if (!doesConfirm) {
      return;
    }
    onDeleteDeck(deck);
  }

  return (
    <li key={`${deck.id}`} className="list-group-item">
      <div className="d-flex justify-content-between">
        <div>
          <h2>{deck.name}</h2>
        </div>
        <div>
          <p>{deck.cards.length} cards</p>
        </div>
      </div>

      <div>{deck.description}</div>

      <div className="d-flex justify-content-between">
        <div>
          <Link to={`/decks/${deck.id}`} className="btn btn-secondary mr-2"><span className="oi oi-eye"></span> View</Link>
          <Link to={`/decks/${deck.id}/study`} className="btn btn-primary"><span className="oi oi-book"></span> Study</Link>
        </div>
        <div>
          <button onClick={handleDelete} className="btn btn-danger"><span className="oi oi-trash"></span></button>
        </div>
      </div>
    </li>
  );
}

export default DeckItem;