import React from "react"
import CardItem from "./CardItem"

function CardList({ cards, onEditCard, onDeleteCard }) {

  return (
    <ul>
      {cards.map((card) => (
        <CardItem
          key={card.id}
          card={card}
          onEdit={onEditCard}
          onDelete={onDeleteCard}
        />
      ))}
    </ul>
  )
}

export default CardList;