import React from "react"
import CardItem from "./CardItem"

function CardList({ cards, onDeleteCard }) {
  console.log(cards)

  return (
    <ul className="list-group">
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