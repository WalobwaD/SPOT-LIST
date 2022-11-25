import React from 'react';
import './App.css';

// import Switch from '@mui/material/Switch';
// import { createContext } from "react"


import Playlist from '../PlayList/PlayList';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../../util/Spotify';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

// export const ThemeContext = createContext(null)

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      playlistName: 'PlayList Name',
      playlistTracks: []
    };

    this.search = this.search.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    // this.toggleTheme = this.toggleTheme.bind(this)
  }

  search(term) {
    Spotify.search(term).then(searchResults => {
      this.setState({searchResults: searchResults});
    });
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    this.setState({playlistTracks: tracks});
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({playlistTracks: tracks});
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
      this.setState({
        playlistName: 'Playlist Name',
        playlistTracks: []
      });
    });
  }

  // toggleTheme(){
  //   this.setState((prevTheme)=>(prevTheme==='light'?'dark':'light'))
  // }
  render() {
    return (
      
        <div>
          <div className="App">

          <NavBar/>

          {/* <Switch
            className="switch"
            checked={this.state.theme === 'light'}
            onChange={this.toggleTheme}
            size="small"
            color="secondary"
            inputProps={{ 'aria-label': 'controlled' }}
          /> */}
          <SearchBar onSearch={this.search} />
            <div className="App-playlist">
              <SearchResults searchResults={this.state.searchResults}
                            onAdd={this.addTrack} />
              <Playlist playlistName={this.state.playlistName}
                        playlistTracks={this.state.playlistTracks}
                        onNameChange={this.updatePlaylistName}
                        onRemove={this.removeTrack}
                        onSave={this.savePlaylist} />
            </div>
            <Footer/>
          </div>
        </div>

    );
  }
}

