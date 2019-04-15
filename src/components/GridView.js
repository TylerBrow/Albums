import React from 'react'
import { Link } from 'react-router-dom'

const GridView = (props) => (
    <div className="grid">
        {props.items.map(item => (
            <Link key={'grid-view-' + item.id} to={item.path}>
                <div className='grid-item'>
                    <img src={item.url} />
                    <h3>{item.name}</h3>                
                </div>
            </Link>
        ))}
    </div>
)

export default GridView