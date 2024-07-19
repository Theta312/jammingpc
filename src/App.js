
import './App.module.css';
import styles from './App.module.css';
import React, { useState, useEffect, useCallback } from 'react';
import NotLogged from './notLogged.js';
import Spotify from './spotify.js';
import SearchBar from './Components/Searchbar/Searchbar.js';
import SearchResult from './Components/SearchResults/SearchResult.js';

function App() {
 //useStates
  const [accessToken, setAccessToken] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [playList, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState('');

 //eventHandlers
  const handlePlaylist = item => setPlaylist((prev) => [...prev, item]);
  const handleDelete = () => {};


  const handleToken = async() => {
    try {
      const token = await Spotify.getAccessToken();
      setAccessToken(token);
    } catch(e) {
      console.log(e);
    }
 };

  const search = useCallback((term) => {
  Spotify.search(term).then(setSearchResults);
}, []);


  console.log(searchResults);
  
  return (
    
    <div className={styles.App}>
       
    {!accessToken ? <NotLogged onClick={handleToken}/> : 
    <div>
      <div>
        <SearchBar onSearch={search}/>
      </div>
      <div>
        <SearchResult handlePlaylist={handlePlaylist} searchResult={searchResults}  />
      </div>
      <div></div>
      <div></div>
    </div>
    
    }
    </div>
  );
}

export default App;
