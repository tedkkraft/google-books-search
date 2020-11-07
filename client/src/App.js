import React, { Component } from "react";
import "./App.css";
import Header from "./components/header.js"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/wrapper.js"
import NoMatch from "./pages/noMatch.js";
import Search from "./pages/search.js";
import Saved from "./pages/saved.js";

class App extends Component {
 
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Wrapper>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/noMatch" component={NoMatch} />
          </Wrapper>
        </div>
      </Router>
    )
  };
};

export default App;