import React from "react";

function CardForm({ front, back, cancelButtonName, onSave, onCancel, onFrontChange, onBackChange }) {

  const handleFrontChange = (event) => onFrontChange(event.target.value);
  const handleBackChange = (event) => onBackChange(event.target.value);

  const handleClickCancel = async (event) => {
    event.preventDefault();
    onCancel();
  }

  const handleClickSave = async (event) => {
    event.preventDefault();
    onSave();
  }


  return (
    <form onSubmit={handleClickSave} className="card-form">
      <div className="form-group">
        <label htmlFor="front">Front</label>
        <textarea
          id="front"
          type="text"
          name="front"
          className="form-control"
          required
          placeholder="Front Side of Card"
          onChange={handleFrontChange}
          value={front} />
      </div>
      <div className="form-group">
        <label htmlFor="back">Back</label>
        <textarea
          id="back"
          type="text"
          name="back"
          className="form-control"
          required
          placeholder="Back Side of Card"
          onChange={handleBackChange}
          value={back} />
      </div>
      <button
        onClick={handleClickCancel}
        className="btn btn-secondary mr-2"
      >
        {cancelButtonName}
      </button>
      <button
        type="submit"
        className="btn btn-primary"
      >Save</button>
    </form>
  )
}

export default CardForm;