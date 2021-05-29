import React from "react";
import { Link } from "react-router-dom";
import DeckList from "../Decks/DeckList";

function HomePage() {

  return (
    <div>
      <div className="actions">
        <Link to="/decks/new">
          <button className="btn btn-secondary">+ Create Deck</button>
        </Link>
      </div>
      <ul className="list-group my-2">
        <DeckList />
      </ul>
    </div>
  );
}

export default HomePage;