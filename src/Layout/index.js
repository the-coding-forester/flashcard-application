import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import HomePage from "../Home/HomePage";
import CreateDeckPage from "../Decks/CreateDeckPage";
import StudyPage from "../Decks/StudyPage/StudyPage"
import AddCardsPage from "../Decks/AddCardPage";
import EditDeckPage from "../Decks/EditDeckPage";
import EditCardPage from "../Decks/EditCardPage";
import DeckOverviewPage from "../Decks/DeckOverviewPage/DeckOverviewPage";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCardPage />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <AddCardsPage />
          </Route>
          <Route path="/decks/:deckId/study">
            <StudyPage />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeckPage />
          </Route>
          <Route path="/decks/new">
            <CreateDeckPage />
          </Route>
          <Route path="/decks/:deckId">
            <DeckOverviewPage />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
