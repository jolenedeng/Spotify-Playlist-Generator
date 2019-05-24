import React from 'react';
import spotify from './util/Spotify';
import Login from './components/Login/Login';
import OptionsBar from './components/OptionsBar/OptionsBar';
import Playlist from './components/Playlist/Playlist';
import './App.css'

class App extends React.Component {
   constructor(props) {
    super(props);
    const params = spotify.getHashParams();
    this.state = {
      songs: ['1', '2', '3'],
      loggedIn: params.access_token ? true : false
      }
    }
  
  render() {
    return (
      <div className="App">
        <div className="header">
          < Login loggedIn={this.state.loggedIn}/>
        </div>  
        <div className="optionsBarContainer">
          < OptionsBar />
        </div>
        <div className="playlistContainer">
          < Playlist songs={this.state.songs}/>
        </div>
      </div>
    )
  }

};

export default App;
