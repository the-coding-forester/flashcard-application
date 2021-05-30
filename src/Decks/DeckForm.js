import React from "react"

function DeckForm({ name, description, onNameChange, onDescriptionChange, onSubmit, onCancel }) {

  const handleNameChange = (event) => onNameChange(event.target.value);
  const handleDescriptionChange = (event) => onDescriptionChange(event.target.value);

  const handleClickCancel = (event) => {
    event.preventDefault();
    onCancel();
  }

  const handleSubmitForm = (event) => {
    event.preventDefault();
    onSubmit();
  }

  return (
    <form class="deck-edit" onSubmit={handleSubmitForm}>
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
          rows="4"
          required
          placeholder="Brief description of the deck"
          onChange={handleDescriptionChange}
          value={description}>
        </textarea>
      </div>
      <button
        type="button"
        class="btn btn-secondary mr-2"
        onClick={handleClickCancel}
      >
        Cancel
      </button>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  )
}

export default DeckForm;