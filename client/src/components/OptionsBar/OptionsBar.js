import React from 'react';
// import Option from '../Option/Option';
import './OptionsBar.css';

const options = {
    genres: ['dance', 'rap', 'disco', 'alternative', 'pop', 'indie']
};

class OptionsBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: ['dance']
        }
    }

    handleSearch() {
        // Call spotify app to create playlist with selected genres
    }

    render() {
        return (
            <div className="optionsBar">
                <div className="optionsBar-options">
                    <ul>
                        {
                            options.genres.map( (genre) => {
                            return <li key={genre.toString()}>{genre}</li>})
                        }
                    </ul>
                </div>
                <div className="optionsBar-submit">
                    <a href="www.#.com" onClick={this.handleSearch}>Create my perfect playlist ♡</a>
                </div>
            </div>
        )
    }
}

export default OptionsBar;