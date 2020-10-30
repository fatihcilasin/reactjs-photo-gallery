import React, { Component } from 'react';
import Store from './hooks/Store'

import Home from "./pages/Home";

import './index.scss';

class App extends Component{
  render(){
    return (
      <div>
        <Store>
            <Home/>
        </Store>
      </div>
    )
  }
}

export default App;
