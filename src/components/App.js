import React, { Component } from 'react';
import '../styles/base.css'
import {BrowserRouter as Router, Route,} from 'react-router-dom'

import Albums from './albums'
import Album from './album'
import Picture from './picture'




class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Albums} />
          <Route path='/albums/:id' component={Album} />
          <Route path='/pictures/:id' component={Picture} />
        </div>  
      </Router>
    )
  }
}

export default App;
