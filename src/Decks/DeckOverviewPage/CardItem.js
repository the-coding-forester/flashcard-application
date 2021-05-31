import React from "react"
import { Link } from "react-router-dom";

function CardItem({ card, onEdit, onDelete }) {

  const handleDelete = () => {
    const doesConfirm = window.confirm("Are you sure you want to delete?");
    if (!doesConfirm) {
      return;
    }
    onDelete();
  }

  const handleEdit = () => {
    onEdit();
  }

  return (
    <li className="list-group-item list-group-item-action flex-column align-items-start">
      <div className="row">
        <div className="col-md-10">
          <div className="row">
            <div className="col">
              {card.front}
            </div>
            <div className="col">
              {card.back}
            </div>
          </div>
        </div>
        <div className="col text-right">
          <Link
            to="/decks/1/cards/1/edit"
            onClick={handleEdit}
            className="btn btn-secondary mr-2"
            title="Edit Card" >
            <span className="oi oi-pencil" />
          Edit
          </Link>
          <button
            onClick={handleDelete}
            className="btn btn-danger"
            title="Delete Card">
            <span className="oi oi-trash">
            </span>
          </button>
        </div>
      </div>
    </li>
  )
}

export default CardItem;