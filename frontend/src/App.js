import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GenreAnalysis, Main, TimeLine, DataComparison, Loading } from './Pages';
import { Provider } from 'react-redux';
import store from './Redux/store';
import NavBar from './NavBar';
import Makers from './Pages/Makers';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div style={{ backgroundColor: '#111111', height: '100vh' }}>
          <NavBar />
          <BrowserRouter>
            <Route path="/" exact component={Main} />
            <Switch>
              <Route path="/timeLine/:nation/:nationCode" component={TimeLine} />
              <Route path="/timeLine" component={TimeLine} />
            </Switch>
            <Route path="/makers" component={Makers} />
            <Route path="/dataComparison" component={DataComparison} />
            <Switch>
              <Route path="/GenreAnalysis/:nation/:nationCode" component={GenreAnalysis} />
              <Route path="/GenreAnalysis/loading" component={Loading} />
              <Route path="/GenreAnalysis" component={GenreAnalysis} />
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
