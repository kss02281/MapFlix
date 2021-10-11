import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Main, TimeLine, TestPage } from "./Pages";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Covid19 from "./Pages/Covid19";
import Genre from "./Pages/Genre";
import Dice from "./Pages/Dice";
import Makers from "./Pages/Makers";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <Route path="/" exact component={Main} />
            <Route path="/timeLine" component={TimeLine} />
            <Route path="/covid" component={Covid19} />
            <Route path="/genre" component={Genre} />
            <Route path="/dice" component={Dice} />
            <Route path="/makers" component={Makers} />
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
