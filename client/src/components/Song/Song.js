import React from 'react';
import './Song.css';
import * as image from './sample-image.jpg';

class Song extends React.Component {
    // Song information: Album art, track name, artist name, play song
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Song">
                <img src={image} alt="Album cover"/>
                <div className="songInfo">
                    <p className="trackName">Track</p>
                    <p className="artistName">Artst</p>
                </div>
                <button className="playButton">Play</button>
            </div>
        )
    }
}

export default Song;