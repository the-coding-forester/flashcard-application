import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { readDeck } from "../../utils/api";
import StudyCard from "./StudyCard"
import NotEnoughCards from "./NotEnoughCards";

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

  function chooseCardDisplay() {
    if (deck.cards.length > 2) {
      return (
        <fieldset>
          <StudyCard
            card={deck.cards[cardIndex]}
            deckLength={deck.cards.length}
            cardIndex={cardIndex}
            onNext={onNext}
          />
        </fieldset>
      )
    } else {
      return (
        <NotEnoughCards
          deckId={deckId}
          deckLength={deck.cards.length}
        />
      )
    }
  }


  return (
    <div>
      <h1>{deck.name}: Study</h1>
      {chooseCardDisplay()}
    </div>
  )
}

export default StudyPage;