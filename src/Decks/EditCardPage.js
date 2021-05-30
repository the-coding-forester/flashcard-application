import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { readCard, readDeck, updateCard } from "../utils/api";
import CardForm from "./CardForm";

function EditCardPage() {
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [deck, setDeck] = useState(null);
  const { deckId, cardId } = useParams();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const localDeck = await readDeck(deckId);
      const currentCard = await readCard(cardId);
      setFront(currentCard.front);
      setBack(currentCard.back);
      setDeck(localDeck);
    })()
  }, [deckId, cardId])

  if (!deck) {
    return null;
  }

  const deckIdNumber = parseInt(deckId)

  const onSave = async () => {
    const updatedCard = await updateCard({ id: cardId, front, back, deckId: deckIdNumber })
    setFront(updatedCard.front);
    setBack(updatedCard.back);
    history.push(`/decks/${deckId}`);

  }

  const onCancel = () => {
    history.push(`/decks/${deckId}`);
  }

  return (
    <div className="container">
      <h2>Edit Card</h2>
      <h3>{deck.name}: Add Card</h3>
      <CardForm
        front={front}
        back={back}
        cancelButtonName="Cancel"
        onFrontChange={setFront}
        onBackChange={setBack}
        onSave={onSave}
        onCancel={onCancel}
      />
    </div>
  )
}

export default EditCardPage;