import React, { Component } from 'react';
import '../styles/base.css'
import axios from 'axios'
import {BrowserRouter as Router, Link} from 'react-router-dom'


import {getAlbums, albumsInfo} from './actions'


console.log(albumsInfo)

class Albums extends Component {
    state = {
        albumname: '',
        Iurl: ''
    }

    componentDidMount() {
        albumsInfo.then(item => {
            item.map(value =>{
                this.setState({
                    albumname: value.albumname,
                    Iurl: value.iurl
                })
            })
        })
    }

    render() {
        return (
    <div id='container'>
      <div id='heading'>
        <h1>My Albums</h1>
      </div>
      <div id='albumcontainer'>
            {
                <div id='album'>
                    <img src={this.state.Iurl} />
                    <p>{this.state.albumname}</p>
                </div>  
            }  
      </div>
   </div>
)}}



export default Albums




/* <div id='album'>
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
        </div> */