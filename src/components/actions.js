import React from 'react'
import axios from 'axios'
import { resolve } from 'q';

export function getAlbums() {
    return new Promise((resolve,reject) => {
      axios.get('http://localhost:3001/albums').then(resp => {
        resolve(resp.data)
})
})}

export const albumsInfo = axios.get('http://localhost:3001/albums').then(resp =>{
    resolve(resp.data)
    return resp.data
    
})
