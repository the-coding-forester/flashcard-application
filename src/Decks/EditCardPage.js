import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import Breadcrumb from "../Layout/Breadcrumb";
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

  const pathArray = [
    { name: `Deck ${deck.name}`, link: `decks/${deck.id}` },
    { name: `Edit Card ${cardId}`, link: `decks/${deck.id}/cards/${cardId}/edit` }
  ]

  return (
    <div className="container">
      <Breadcrumb
        pathArray={pathArray}
      />
      <h1>Edit Card</h1>
      <h2>{deck.name}: Add Card</h2>
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