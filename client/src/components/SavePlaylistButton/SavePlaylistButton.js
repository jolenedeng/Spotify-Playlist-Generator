import React from 'react';
import './SavePlaylistButton.css';

class SavePlaylistButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { hasSongs, show } = this.props;
        
        // Show save playlist button if there is a playlist and it has not been saved
        if (hasSongs && show) {
            return (
                <div className="savePlaylistButton">
                    <a href="#" onClick={this.props.savePlaylist}>Save playlist</a>
                </div>
            )
        }
        // Show saved if there is a playlist and it has been saved
        else if (hasSongs) {
            return (
                <div className="saved">
                    <p>Playlist was saved to your account ☺</p>
                </div>
            )
        }
        else return null;
    }
}

export default SavePlaylistButton;