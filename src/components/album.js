import React, { Component } from 'react';
import '../styles/base.css'
import axios from 'axios'
import {BrowserRouter as Router, Link} from 'react-router-dom'


const Album = (props) => (
    <div id='container'>
      <div id='heading'>
        <h1>My Albums</h1>
      </div>
      <div id='albumcontainer'>
        <div id='album'>
          <img src='http://placehold.it/200/200'/>
          <p>Album Name</p>
        </div>
        <div id='album'>
          <img src='http://placehold.it/200/200'/>
          <p>Album Name</p>
        </div>
        <div id='album'>
          <img src='http://placehold.it/200/200'/>
          <p>Album Name</p>
        </div>
        <div id='album'>
          <img src='http://placehold.it/200/200'/>
          <p>Album Name</p>
        </div>
        <div id='album'>
          <img src='http://placehold.it/200/200'/>
          <p>Album Name</p>
        </div>
        <div id='album'>
          <img src='http://placehold.it/200/200'/>
          <p>Album Name</p>
        </div>
      </div>
   </div>
)

export default Album