import React, { useState } from "react"

function StudyCard({ deckLength, card, cardIndex, onNext }) {
  const [hasFlipped, setHasFlipped] = useState(false);
  const [cardFront, setCardFront] = useState(true);

  function handleCardFlip() {
    setHasFlipped(true);
    setCardFront(prevSide => !prevSide);
  }

  function handleClickNext() {
    setHasFlipped(false);
    setCardFront(true);
    onNext();
  }

  return (
    <div className="card front study-card">
      <div className="card-body">
        <h5 className="card-title">Card {cardIndex + 1} of {deckLength}</h5>
        <p className="card-text">{cardFront ? card.front : card.back}</p>
        <button
          onClick={handleCardFlip}
          type="button"
          class="btn btn-secondary mr-2">
          Flip
      </button>
        {hasFlipped ?
          <button onClick={handleClickNext}>Next</button> :
          null}
      </div>
    </div>

  )
}

export default StudyCard;