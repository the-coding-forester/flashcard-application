import React from "react";
import { Link } from "react-router-dom";
import { deleteDeck } from "../utils/api";

function DeckItem({ deck onDeleteDeck }) {
  function handleDelete() {
    // display confirm dialog and allow cancel
    const doesConfirm = window.confirm("Are you sure you want to delete?");
    // return early to exit out of function if not confirmed
    if (!doesConfirm) return;
    // call the delete API function
    // if success, delete from state by calling onClickDelete
    deleteDeck(deck.id)
      .then(() => {
        onDeleteDeck(deck.id);
      })
      .catch((err) => console.log(err));
  }

  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between">
        <div>
          <h3>{deck.name}</h3>
        </div>
        <div>
          <p>{deck.cards.length} cards</p>
        </div>
      </div>

      <div>{deck.description}</div>

      <div className="d-flex justify-content-between">
        <div>
          <Link to={`/desks/${deck.id}/study`} className="btn btn-primary">Study</Link>
          <Link to={`/desks/${deck.id}`} className="btn btn-secondary mr-2">View</Link>
        </div>
        <div>
          <button onClick={handleDelete} className="btn btn-danger">Delete</button>
        </div>
      </div>
    </li>
  );
}

export default DeckItem;