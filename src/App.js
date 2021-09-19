import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
// import CodeBlock from "./components/CodeBlock";

const routes = [
  { name: "Home Page", path: "/", component: Home },
  { name: "About Page", path: "/about", component: About },
  // { name: "CodeBlock", path: "/codeblock", component: CodeBlock },
];
function App() {
  return (
    <div className="App">
      <Router>
        <ol>
          {routes.map((r) => (
            <li key={r.path}>
              <Link to={r.path}>{r.name}</Link>
            </li>
          ))}
        </ol>
        <hr style={{ height: "3px", color: "#333", backgroundColor: "#333" }} />
        <Switch>
          {routes.map((rr) => (
            <Route
              key={rr.path}
              exact
              path={rr.path}
              component={rr.component}
            />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
