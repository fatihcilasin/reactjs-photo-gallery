import React, { Component, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Store from './hooks/Store'

import Home from "./pages/Home";

import './index.scss';
import Favorites from "./pages/Favorites";
import Header from "./components/Header";

class App extends Component{
  render(){
    return (
      <div>
        <Store>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/favorites">
                        <Favorites/>
                    </Route>
                </Switch>
            </Router>
        </Store>
      </div>
    )
  }
}

export default App;
