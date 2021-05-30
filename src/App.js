import React from "react";
import EditorPanel from "./app/pages/EditorPanel";
import Login from "./app/pages/Login";
import Dashboard from "./app/pages/Dashboard";
import LeaderShip from "./app/pages/LeaderShip";
import User from "./app/pages/User";
import "./app/styles/Styles.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
export default function App() {
  return (
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/topics">
          <Topics />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}
