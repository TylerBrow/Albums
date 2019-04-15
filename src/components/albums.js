import React, { Component } from 'react';
import '../styles/base.css'
import GridView from './GridView'
import axios from 'axios'



class Albums extends Component {
    state= {
        items: []
    }
    componentDidMount(){
        axios.get('http://localhost:3001/albums').then(resp => {
            const items = resp.data.map((item) => {
                return {
                    path:"/albums/" + item.id,
                    url: item.iurl,
                    name: item.albumname,
                    id: item.id
                }
            })

            this.setState({
                items: items
            })

        })
    }

     render() {
        return (
            <div>
                <h1>Super Smash Bros. Tier-List</h1>
                <GridView items={this.state.items} />
            </div>
        )
    }
}  
export default Albums



