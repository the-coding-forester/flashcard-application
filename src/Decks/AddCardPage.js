import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { createCard, readDeck } from "../utils/api";
import CardForm from "./CardForm";

function AddCardsPage() {
  const history = useHistory();
  const { deckId } = useParams();

  const [deck, setDeck] = useState(null);
  const [front, setFront] = useState("")
  const [back, setBack] = useState("");


  useEffect(() => {
    (async () => {
      const localDeck = await readDeck(deckId);
      setDeck(localDeck);
    })()
  }, [deckId])

  if (!deck) {
    return null;
  }

  const onDone = () => {
    setFront("");
    setBack("");
    history.push(`/decks/${deckId}`);
  }


  const onSave = async () => {
    await createCard(deckId, { front, back })
    setFront("");
    setBack("");
  }

  return (
    <div className="container">
      <h2>{deck.name}: Add Card</h2>
      <CardForm
        front={front}
        back={back}
        onFrontChange={setFront}
        onBackChange={setBack}
        onCancel={onDone}
        onSave={onSave}
        cancelButtonName="Done"
      />
    </div>
  )
}

export default AddCardsPage;