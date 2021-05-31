import React from "react"
import CardItem from "./CardItem"

function CardList({ cards, onDeleteCard }) {

  return (
    <ul>
      {cards.map((card) => (
        <CardItem
          key={card.id}
          card={card}
          onDelete={onDeleteCard}
        />
      ))}
    </ul>
  )
}

export default CardList;