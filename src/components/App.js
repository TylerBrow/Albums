import React, { Component } from 'react';
import '../styles/base.css'
import axios from 'axios'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Albums from './albums'
import Album from './album'
import Picture from './picture'


// axios.get('http://localhost:3001/example').then(resp => {
//   console.log(resp.data)
// })

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Albums} />
          <Route path='/album' component={Album} />
          <Route path='/picture' component={Picture} />
        </div>  
      </Router>
    )
  }
}

export default App;
