import React from "react";
import logo from "./thumbsUp.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Show } from "./components/Show";
import { Episode } from "./components/Episode";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>
        </nav>
        <main>
          <Switch>
            <Route path="/show" component={Show} />
            <Route path="/episode" component={Episode} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
