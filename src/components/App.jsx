import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import logo from "../img/tv.svg";
import "../App.scss";
import Show from "./Show";
import { Episode } from "./Episode";
import { Home } from "./Home";
// import store from "../store";

function App() {
  return (
    // <Provider store={store}>
    <Router>
      <div className="App">
        <nav className="main-nav">
          <Link to="/">
            <img src={logo} className="logo hvr-buzz" alt="logo" />
          </Link>
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
            <Route path="/:showId" exact component={Show} />
            <Route path="/:showId/:episodeId" component={Episode} />
          </Switch>
        </main>
      </div>
    </Router>
    // </Provider>
  );
}

export default App;
