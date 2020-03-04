import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import logo from "../img/tv.svg";
import "../App.scss";
import Show from "./Show";
import Episode from "./Episode";
import Home from "./Home";
import store from "../store";
import DataGetter from "./DataGetter";

export const App = () => {
  return (
    <Router>
      <DataGetter />
      <div className="App">
        <nav className="main-nav">
          <a href="/">
            <img src={logo} className="logo hvr-buzz" alt="logo" />
          </a>
          <div className="home-bubble">
            Made with{" "}
            <span role="img" aria-label="love">
              ❤️️
            </span>
          </div>
        </nav>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/yourRandomShow/:showId" exact component={Show} />
            <Route
              path="/yourRandomShow/:showId/:episodeId"
              component={Episode}
            />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export const AppContainer = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppContainer;
