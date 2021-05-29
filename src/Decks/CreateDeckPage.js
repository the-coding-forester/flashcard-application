import React, { useState } from "react";

function CreateDeckPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div class="container">
      <h1>Create Deck</h1>
      <form class="deck-edit">
        <fieldset>
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              class="form-control"
              required
              placeholder="Deck Name" />
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <textarea
              id="description"
              name="description"
              class="form-control"
              rows="3"
              required=""
              placeholder="Brief description of the deck">
            </textarea>
          </div>
          <button type="button" class="btn btn-secondary mr-2">Cancel</button>
          <button type="submit" class="btn btn-primary">Submit</button>
        </fieldset>
      </form>
    </div >

  )
}

export default CreateDeckPage;