import React, { Component } from 'react';
import '../styles/base.css'
import axios from 'axios'

class Picture extends Component {
    state = {
        image: ''
    }
    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`http://localhost:3001/pictures/${id}`).then(resp => {
            this.setState({
                image: resp.data.iurl
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Picture View</h1>
                <div className ='imageView'>
                    <img src={this.state.image} />
                </div>
            </div>
        )
    }
}


export default Picture