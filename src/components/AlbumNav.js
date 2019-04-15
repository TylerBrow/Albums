import React from 'react'
import { Link } from 'react-router-dom'

const AlbumNav = (props) => (
    <nav>
        <ul>
            {props.albums.map(album => (
                <li key={`albumnav-${album.id}`}><Link to={`/albums/${album.id}`}>{album.albumname}</Link></li>
            ))}
        </ul>
    </nav>
)

export default AlbumNav