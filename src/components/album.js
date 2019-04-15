import React, { Component } from 'react';
import '../styles/base.css'
import axios from 'axios'
import GridView from './GridView'
import AlbumNav from './AlbumNav'



class Album extends Component {
    state = {
        items: [],
        albums:[]
    }

    getAlbum(id) {
        axios.get(`http://localhost:3001/albums/${id}?_embed=pictures`).then(resp => {
            
            const items = resp.data.pictures.map((item) => {
                
                return {
                    path:"/pictures/" + item.id,
                    url: item.iurl,
                    name: item.picturename,
                    id: item.id
                }
            })

            this.setState({items})
        })
    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.getAlbum(id)
        axios.get('http://localhost:3001/albums').then(resp => {
            this.setState({
                albums: resp.data
            })
        })
    }
    componentWillReceiveProps(newProps){
        if (newProps.match.params.id !== this.props.match.params.id) {
        const id = newProps.match.params.id
        this.getAlbum(id)
    }}
    render() {
        return (
            <div>
                <h1>Album</h1>
                <div className="container">
                  <AlbumNav albums={this.state.albums} />
                  <GridView items={this.state.items} />
                </div>
            </div>
        )
    }
}

export default Album