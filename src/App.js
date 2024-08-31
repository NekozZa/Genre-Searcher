import React, { useState, useEffect } from "react";
import axios from 'axios';
import SearchBar from './component/SearchBar.jsx'
import TrackCard from "./component/TrackCard.jsx";
import './styles/app.css'
import 'remixicon/fonts/remixicon.css'

const clientID = process.env.REACT_APP_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

function App() {
  const [token, setToken] = useState('');
  const [tracks, setTracks] = useState(null);
  const [trackIndex, setTrackIndex] = useState(0);

  useEffect(() => {
    const getToken = async () => {
      const data = `grant_type=client_credentials&client_id=${clientID}&client_secret=${clientSecret}`
      const response = await axios.post('https://accounts.spotify.com/api/token', data, {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      })

      setToken(response.data.access_token)
    }

    getToken()
  }, [])

  function changeTrack(offSet) {
    var newTrackIndex = trackIndex + offSet;

    if(newTrackIndex  < 0) {
      newTrackIndex = tracks.length - 1;
    } else if(newTrackIndex >= tracks.length) {
      newTrackIndex = 0;
    }

    setTrackIndex(newTrackIndex);
  }


  return (
    <div className="app">
      <SearchBar token={token} onSubmit={setTracks}/>
      
      <div className="cards-container">
        {tracks && 
          <>
            <i className="ri-arrow-left-double-line" onClick={() => {changeTrack(-1)}}></i>
            <TrackCard trackInfo={tracks[trackIndex]}/>
            <i className="ri-arrow-right-double-line" onClick={() => {changeTrack(1)}}></i>
          </>}
      </div>
    </div>
  );
}

export default App;
