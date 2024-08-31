import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/search-bar.css'

function SearchBar(props) {
    const [genres, setGenres] = useState('');
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        const getTracks = async () => {
            const response = await axios.get('https://api.spotify.com/v1/search', {
                params: {
                    q: `genre:${genres}`,
                    type: 'track',
                    limit: 10,
                    offset: 5
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${props.token}`
                }
            })
    
            setTracks(response.data.tracks.items)
        }

        getTracks();
    }, [props.token, genres])

    return (
        <div className='search-bar'>
            <i class="ri-search-line" onClick={() => {
                props.onSubmit(tracks);
                console.log(tracks);     
            }}></i>

            <input type="text" name="artistName" placeholder="Enter Genres" value={genres} onChange={(event) => {setGenres(event.target.value)}}></input>
        </div>
    )
}

export default SearchBar