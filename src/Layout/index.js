import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import HomePage from "../Home/HomePage";
import CreateDeckPage from "../Decks/CreateDeckPage";
import StudyPage from "../Decks/Study/StudyPage"

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
          <Route path="/decks/new">
            <CreateDeckPage />
          </Route>
          <Route path="/decks/:deckId/study">
            <StudyPage />
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
