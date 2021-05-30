import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { readDeck } from "../../utils/api";
import CardDisplay from "./CardDisplay";

function StudyPage() {
  const [deck, setDeck] = useState(null);
  const [cardIndex, setCardIndex] = useState(0);
  const { deckId } = useParams();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const localDeck = await readDeck(deckId);
      setDeck(localDeck);
    })()
  }, [deckId])

  function onNext() {
    if (cardIndex >= (deck.cards.length - 1)) {
      const returnValue = window.confirm(
        `Restart cards?

        Click 'cancel' to return to the home page.`
      )
      !returnValue ? history.push("/") : setCardIndex(0);
    } else {
      setCardIndex(prevIndex => prevIndex + 1)
    }
  }

  if (!deck) {
    return null;
  }


  return (
    <div>
      <h2>{deck.name}: Study</h2>
      <fieldset>
        <CardDisplay
          card={deck.cards[cardIndex]}
          deckLength={deck.cards.length}
          cardIndex={cardIndex}
          onNext={onNext}
        />
      </fieldset>
    </div>
  )
}

export default StudyPage;