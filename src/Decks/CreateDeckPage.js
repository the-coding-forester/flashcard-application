import React, { useState } from "react";
import { useHistory } from "react-router";
import { createDeck } from "../utils/api";

function CreateDeckPage() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleNameChange = (event) => setName(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);

  const handleCreateDeck = async (event) => {
    event.preventDefault();
    await createDeck({ name, description });
    setName("");
    setDescription("")
  }

  async function handleCancelDeck(event) {
    event.preventDefault();
    setName("");
    setDescription("");
    history.push("/");
  }

  return (
    <div class="container">
      <h2>Create Deck</h2>
      <form class="deck-edit" onSubmit={handleCreateDeck}>
        <div class="form-group">
          <label for="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            class="form-control"
            required
            placeholder="Deck Name"
            onChange={handleNameChange}
            value={name} />
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea
            id="description"
            name="description"
            class="form-control"
            rows="3"
            required=""
            placeholder="Brief description of the deck"
            onChange={handleDescriptionChange}
            value={description}>
          </textarea>
        </div>
        <button
          type="button"
          class="btn btn-secondary mr-2"
          onClick={handleCancelDeck}
        >
          Cancel
          </button>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div >

  )
}

export default CreateDeckPage;