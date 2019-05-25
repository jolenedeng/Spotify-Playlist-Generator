import React from 'react';
import './SavePlaylistButton.css';

class SavePlaylistButton extends React.Component {
    constructor(props) {
        super(props);
    }
    
    handleClick() {
        this.props.savePlaylist();
    }

    render() {
        const {hasSongs} = this.props;
        
        if (hasSongs) {
            return (
                <div className="savePlaylistButton">
                    <a href="#" onClick={this.handleClick}>Save playlist</a>
                </div>
            )
            }
        else return null;
    }
}

export default SavePlaylistButton;