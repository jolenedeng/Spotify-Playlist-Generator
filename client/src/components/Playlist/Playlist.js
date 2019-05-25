import React from 'react';
import Song from '../Song/Song';
import './Playlist.css';

class Playlist extends React.Component {
    // todo: Save playlist to account
    constructor(props) {
        super(props);
    }

    render() {
        const { songs } = this.props;

        if (songs.length > 0) {
            return (
                <div className="playlist">
                          {songs.map((song) => {
                            return <Song key={song.id} song={song} play={this.props.play} pause={this.props.pause}/>
                          })}
                </div>

            )
        }
        else return null;
    }
}

export default Playlist;