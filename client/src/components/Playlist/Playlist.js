import React from 'react';
import Song from '../Song/Song';
import SavePlaylistButton from '../SavePlaylistButton/SavePlaylistButton';
import './Playlist.css';

class Playlist extends React.Component {
    // Playlist information: Save playlist to account
    constructor(props) {
        super(props);
        this.state = {
            songs: []
        }
    }

    addPlaylistToAccount() {
        
    }
    
    render() {
        return (
            <div className="playlist">
                 {this.props.songs.map((song) => {
                        return <Song key={song.toString()} song={song}/>
                    })}
                < SavePlaylistButton addPlaylistToAccount={this.addPlaylistToAccount}/>
            </div>
        )
    }
}

export default Playlist;