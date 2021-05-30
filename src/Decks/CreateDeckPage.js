import React, { useState } from "react";
import { useHistory } from "react-router";
import { createDeck } from "../utils/api";
import DeckForm from './DeckForm';

function CreateDeckPage() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");


  const handleCreateDeck = async () => {
    await createDeck({ name, description });
    setName("");
    setDescription("")
  }

  const handleCancelDeck = () => {
    setName("");
    setDescription("");
    history.push("/");
  }

  return (
    <div class="container">
      <h2>Create Deck</h2>

      <DeckForm
        name={name}
        description={description}
        onNameChange={setName}
        onDescriptionChange={setDescription}
        onCancel={handleCancelDeck}
        onSubmit={handleCreateDeck}
      />
    </div >

  )
}

export default CreateDeckPage;