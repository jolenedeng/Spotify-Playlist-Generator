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
    this.state = {
      user_id: "",
      user_name: "",
      loggedIn: false,
      genres: [],
      songs: []
      }
    }

    componentDidMount = () => {
      const params = this.getHashParams();
      spotifyApi.setAccessToken(params.access_token);

      if (params.error) {
        alert('There was an error during the authentication');
      } 
      else if (params.access_token) {
        this.setState({loggedIn: true});
      }  
      // Get current user's information
      spotifyApi.getMe()
        .then ((data) => {
          this.setState({
            user_name: data.display_name, 
            user_id: data.id
          })
          console.log(data);   
        })
      }
      

    getRecommendations = (selected) => {
      let options = {
        seed_genres: selected
      }

      spotifyApi.getRecommendations(options)
          .then( (data) => {
            console.log(data.tracks);

            this.setState({
              songs: data.tracks.map(track => {
                return {
                  id: track.id,
                  name: track.name,
                  artist: track.artists[0].name,
                  albumSrc: track.album.images[0].url,
                  uri: track.uri
                }
              }),
              genres: selected
            })
          }) 
    }

    savePlaylist = (e) => {
      e.preventDefault();

      if (this.state.songs.length > 0) {
        const user_id = this.state.user_id;
        const body = {
          name: "My perfect playlist ♡",
          description: `A perfect mix of... ${this.state.genres.join(', ')}!`
        } 

        spotifyApi.createPlaylist(user_id, body)
          .then( (data) => {
            let id = data.id;
            let uris = this.state.songs.map( song => song.uri );

            spotifyApi.addTracksToPlaylist(id, uris)})
            .then( (data) => {
                console.log(data);
            })
          }
    }

    play = (uri) => {
      let options = {
        "uris": [uri]
      };

      spotifyApi.play(options);
    };

    pause = (uri) => {
      let options = {
        "uris": [uri]
      };

      spotifyApi.pause(options);
    };

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
        <div className="playlistContainer">
          < Playlist songs={this.state.songs} spotify={spotifyApi} play={this.play} pause={this.pause} />
          < SavePlaylistButton savePlaylist={this.savePlaylist} hasSongs={this.state.songs.length > 0 ? true : false}/>
        </div>

        <div className="footer"></div>
      </div>
    )
  }

};

export default App;
