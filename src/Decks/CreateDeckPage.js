import React, { useState } from "react";
import { useHistory } from "react-router";
import Breadcrumb from "../Layout/Breadcrumb";
import { createDeck } from "../utils/api";
import DeckForm from './DeckForm';

function CreateDeckPage() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateDeck = async () => {
    const newDeck = await createDeck({ name, description });
    setName("");
    setDescription("")
    history.push(`/decks/${newDeck.id}`);
  }

  const handleCancelDeck = () => {
    setName("");
    setDescription("");
    history.push("/");
  }

  const pathArray = [{ name: "Create Deck", link: "/decks/new" }]

  return (
    <div className="container">
      <Breadcrumb
        pathArray={pathArray}
      />
      <h1>Create Deck</h1>

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