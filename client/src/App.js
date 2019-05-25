import React from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Login from './components/Login/Login';
import OptionsBar from './components/OptionsBar/OptionsBar';
import Playlist from './components/Playlist/Playlist';
import SavePlaylistButton from './components/SavePlaylistButton/SavePlaylistButton';
import './App.css'


const spotifyApi = new SpotifyWebApi();

class App extends React.Component {
   constructor(props) {
    super(props);
    const params = this.getHashParams();
    spotifyApi.setAccessToken(params.access_token);
    this.state = {
      songs: [],
      loggedIn: params.access_token ? true : false
      }
    }

    getRecommendations = (selected) => {
      let options = {
        seed_genres: selected
      }

      spotifyApi.getRecommendations(options)
          .then( (data) => {
            this.setState({
              songs: data.tracks.map(track => {
                console.log(data.tracks)
                return {
                  id: track.id,
                  name: track.name,
                  artist: track.artists[0].name,
                  albumSrc: track.album.images[0].url
                }
              })
            })
          }) 
    }

    addPlaylistToAccount() {
      // stub
    }

    getHashParams() { 
      var hashParams = {};
      var e, r = /([^&;=]+)=?([^&;]*)/g,
          q = window.location.hash.substring(1);
      while ( e = r.exec(q)) {
         hashParams[e[1]] = decodeURIComponent(e[2]);
      }
      return hashParams;
  }
  
  render() {
    return (
      <div className="App">
        <div className="header">
          < Login loggedIn={this.state.loggedIn}/>
        </div>  
        <div className="optionsBarContainer">
          < OptionsBar getRecommendations={this.getRecommendations} />
        </div>
        <div className="playlistOuterContainer">
          <div className="playlistContainer">
            < Playlist songs={this.state.songs} addPlaylistToAccount={this.addPlaylistToAccount}/>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    )
  }

};

export default App;
