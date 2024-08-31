import React from 'react';
import '../styles/track-card.css'

function TrackCard(props) {
    const info = props.trackInfo;

    return (
        <div className='card'>
            <img src={info.album.images[0].url} alt="" />

            <div className='track-info'>
                <h1>{info.name}</h1>
                <h2>{info.artists[0].name}</h2>
            </div>

            <div className='song-slider'>
                <input type="range" value='0' className='seek-bar'/>
            </div>
            
            <div className='icons'>
                <div>
                    <i class="ri-shuffle-line feature"></i>
                    <i className="ri-contract-left-fill arrow"></i>
                    <i class="ri-pause-circle-fill pause"></i>
                    <i className="ri-contract-right-fill arrow"></i>
                    <i class="ri-repeat-2-line feature"></i>
                </div>
            </div>
        </div>
    )
}

export default TrackCard;