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
    <fieldset>
      <h5>Card {cardIndex + 1} of {deckLength}</h5>
      <p>{cardFront ? card.front : card.back}</p>
      <button onClick={handleCardFlip}>
        Flip
      </button>
      {hasFlipped ?
        <button onClick={handleClickNext}>Next</button> :
        null}
    </fieldset>

  )
}

export default StudyCard;