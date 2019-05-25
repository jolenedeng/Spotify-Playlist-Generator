import React from 'react';
import './OptionsBar.css';

const options = {
    genres: ['acoustic', 'alt-rock', 'alternative', 'ambient', 'chill', 'dance', 'electro', 'groove', 'hip-hop', 'indie', 'k-pop', 'soul', 'study', 'synth-pop']
};

class OptionsBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: []
        }
    }

    handleOptionClick(genre) {
        if (this.state.selected.includes(genre)) {
            this.setState({ 
                    selected: this.state.selected.filter( x => x != genre),
                }
            )
            console.log(this.state.selected);
        }
        else if (this.state.selected.length < 5){
            this.setState({
                selected: this.state.selected.concat(genre)
            })
            console.log(this.state.selected);
        }
    }

    handleSearch = (e) => {
        // Call spotify app to create playlist with selected genres
        e.preventDefault();

        if (this.state.selected.length > 0) {
            {this.props.getRecommendations(this.state.selected)};
        }
    }

    getOptionClass(genre) {
        if (this.state.selected.includes(genre)) {
            return 'active';
        }
        else return '';
    }

    render() {
        return (
            <div className="optionsBar">
                <div className="optionsBar-title">
                    <h1>Select up to 5 genres</h1>
                </div>
                <div className="optionsBar-options">
                    <ul>
                        { options.genres.map( (genre) => {
                            return <li  key={genre}
                                        onClick={this.handleOptionClick.bind(this, genre)}
                                        className={this.getOptionClass(genre)}
                                    >{genre}</li>})}
                    </ul>
                </div>
                <div className="optionsBar-submit">
                    <a href="#" onClick={this.handleSearch}>Create my perfect playlist ♡</a>
                </div>
            </div>
        )
    }
}

export default OptionsBar;