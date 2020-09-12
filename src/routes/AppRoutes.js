import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { DcScreen } from "../components/dc/DcScreen";
import { HeroesScreen } from "../components/heroes/HeroesScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { Navbar } from "../components/navbar/Navbar";

export const AppRoutes = () => {
  return (
    <Router>
      <Navbar />

      <div className="container">
        <Switch>
          <Route exact path="/" component={HeroesScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/marvel" component={MarvelScreen} />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </Router>
  );
};
