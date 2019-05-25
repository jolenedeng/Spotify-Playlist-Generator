import React from 'react';
import './Song.css';
import pausePlay from './icons/pause-play.svg';

class Song extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false
        }
    }

    handleClick = (uri) =>  {
        if (!this.state.isPlaying){
            this.props.play(uri);
            this.setState({isPlaying: true});
        }
        else {
            this.props.pause(uri);
            this.setState({isPlaying: false});
        }
    }

    render() {
        const { song } = this.props;

        return (
            <div className="Song">
                <div className="albumContainer" >
                    <img className="albumCover" src={song.albumSrc} id={this.state.isPlaying ? "active" : ""} alt="Album cover"/>
                </div>
                <div className="songInfo">
                    <p className="trackName">{song.name}</p>
                    <p className="artistName">{song.artist}</p>
                </div>
                <div className="btnContainer">
                <button className="btn" onClick={this.handleClick.bind(this, song.uri)}>
                    <img className="btnImg" src={pausePlay} alt="pause/play"/>
                </button>
                </div>
            </div>
        )
    }
}

export default Song;