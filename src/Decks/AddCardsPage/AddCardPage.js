import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { createCard, readDeck } from "../../utils/api";

function AddCardsPage() {
  const history = useHistory();
  const { deckId } = useParams();

  const [deck, setDeck] = useState(null);
  const [front, setFront] = useState("")
  const [back, setBack] = useState("");

  const handleFrontChange = (event) => setFront(event.target.value);
  const handleBackChange = (event) => setBack(event.target.value);

  useEffect(() => {
    (async () => {
      const localDeck = await readDeck(deckId);
      setDeck(localDeck);
    })()
  }, [deckId])

  if (!deck) {
    return null;
  }

  async function handleClickDone(event) {
    event.preventDefault();
    setFront("");
    setBack("");
    history.push(`/decks/${deckId}`);
  }

  const handleClickSave = async (event) => {
    event.preventDefault();
    await createCard(deckId, { front, back })
    setFront("");
    setBack("");
  }

  return (
    <div class="container">
      <h2>{deck.name}: Add Card</h2>
      <form onSubmit={handleClickSave}>
        <div>
          <label for="front">Front</label>
          <textarea
            id="front"
            type="text"
            name="front"
            class="form-control"
            required
            placeholder="Front Side of Card"
            onChange={handleFrontChange}
            value={front} />
        </div>
        <div>
          <label for="back">Back</label>
          <textarea
            id="back"
            type="text"
            name="back"
            class="form-control"
            required
            placeholder="Back Side of Card"
            onChange={handleBackChange}
            value={back} />
        </div>
        <button onClick={handleClickDone}>Done</button>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default AddCardsPage;