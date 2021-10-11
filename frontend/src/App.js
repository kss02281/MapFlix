import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Main, TimeLine } from "./Pages";
import { Provider } from "react-redux";
import store from "./Redux/store";
import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <NavBar />
          <BrowserRouter>
            <Route path="/" exact component={Main} />
            <Route path="/timeLine" component={TimeLine} />
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
