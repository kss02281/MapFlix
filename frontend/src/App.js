import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Main, TimeLine } from './Pages';
import { Provider } from 'react-redux';
import store from './redux/store';
import NavBar from './NavBar';






class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
        <NavBar />
          <BrowserRouter>
            <Route path="/" exact component={Main} />
            <Switch>
              <Route path="/timeLine/:nation/:nationCode" component={TimeLine} />
              <Route path="/timeLine" component={TimeLine} />
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}


export default App;
