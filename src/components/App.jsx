import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";
import logo from "../img/thumbsUp.svg";
import "../App.css";
import Show from "./Show";
import { Episode } from "./Episode";
import { Home } from "./Home";
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <nav>
            <Link to="/">
              <img src={logo} className="logo" alt="logo" />
            </Link>
          </nav>
          <main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/show" component={Show} />
              <Route path="/episode" component={Episode} />
            </Switch>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
