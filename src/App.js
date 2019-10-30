import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import React from "react";
import Home from "./Home";
import Contact from "./Contact";


function App(props) {
  return (
    <Router>
    <div className="appContainer">
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/Contact/:id" component={Contact}/>
      </div>
    </div>
    </Router>
  );
}

export default App;
