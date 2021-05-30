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
    <form onSubmit={handleClickSave}>
      <div>
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
      <div>
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
      <button onClick={handleClickCancel}>{cancelButtonName}</button>
      <button type="submit">Save</button>
    </form>
  )
}

export default CardForm;