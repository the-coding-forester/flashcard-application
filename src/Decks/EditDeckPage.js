import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router";
import { updateDeck, readDeck } from "../utils/api";
import DeckForm from "./DeckForm";

function EditDeckPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { deckId } = useParams();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const localDeck = await readDeck(deckId);
      setName(localDeck.name);
      setDescription(localDeck.description);
    })()
  }, [deckId])

  const handleSubmit = async () => {
    await updateDeck({ id: deckId, name, description })
    setName("");
    setDescription("")
    history.push(`/decks/${deckId}`);
  }

  const handleCancel = () => {
    setName("");
    setDescription("")
    history.push(`/decks/${deckId}`);
  }

  return (
    <div class="container">
      <h1>Edit Deck</h1>

      <DeckForm
        name={name}
        description={description}
        onNameChange={setName}
        onDescriptionChange={setDescription}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      />
    </div >
  )
}

export default EditDeckPage;