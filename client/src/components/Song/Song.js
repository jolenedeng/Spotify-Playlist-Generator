import React from 'react';
import './Song.css';
import pause from './icons/pause.svg';
import play from './icons/play.svg';
import * as image from './sample-image.jpg';

class Song extends React.Component {
    // Song information: Album art, track name, artist name, play song
    constructor(props) {
        super(props);
    }

    render() {
        const { song } = this.props;

        return (
            <div className="Song">
                <img src={song.albumSrc} alt="Album cover"/>
                <div className="songInfo">
                    <p className="trackName">{song.name}</p>
                    <p className="artistName">{song.artist}</p>
                </div>
                <div className="btnContainer">
                <button className="btn"></button>
                </div>
            </div>
        )
    }
}

export default Song;