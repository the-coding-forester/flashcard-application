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
    <form className="deck-edit" onSubmit={handleSubmitForm}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          className="form-control"
          required
          placeholder="Deck Name"
          onChange={handleNameChange}
          value={name} />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          className="form-control"
          rows="4"
          required
          placeholder="Brief description of the deck"
          onChange={handleDescriptionChange}
          value={description}>
        </textarea>
      </div>
      <button
        type="button"
        className="btn btn-secondary mr-2"
        onClick={handleClickCancel}
      >
        Cancel
      </button>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default DeckForm;