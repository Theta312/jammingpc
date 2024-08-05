
import styles from './App.module.css';
import React, { useState, useCallback } from 'react';
import NotLogged from './notLogged.js';
import Spotify from './spotify.js';
import SearchBar from './Components/Searchbar/Searchbar.js';
import SearchResult from './Components/SearchResults/SearchResult.js';
import Playlist from './Components/Playlist/Playlist.js';




function App() {
 //useStates
  const [accessToken, setAccessToken] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [playList, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState('');

 //eventHandlers
  const handlePlaylist = item => setPlaylist((prev) => {
   if (playList.some(prev => prev.id === item.id)) {
    return [...prev];
   } return [...prev, item];
  });

  const handlePlaylistName = item => setPlaylistName(item);

  const handleDelete = song => {
    setPlaylist((prev) => {
      return prev.filter(item => item.id !== song.id)
    });
    setSearchResults((prev) => [song, ...prev]);
  };

  console.log(searchResults)
  const deleteResult = song => {
    setSearchResults((prev) => {
       return prev.filter(item => item.id !== song.id)
    })
  }

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




  const savingPlaylist = useCallback(() => {
    const trackUris = playList.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("Playlist");
      setPlaylist([]);
    });
  }, [playlistName, playList]);

 


  return (
    
    <div className={styles.App}> 
      {!accessToken ? <NotLogged className={styles.notLogged} onClick={handleToken}/> : 
      <div className={styles.Main} >
        <h2 className={styles.header} >Ja<span>mmm</span>ing</h2>
        <div className={styles.searchbar} >
          <SearchBar onSearch={search}/>
        </div>
        <div className={styles.searchResults} >
          <SearchResult handlePlaylist={handlePlaylist} searchResult={searchResults} deleteResult={deleteResult} />
        </div>
        <div className={styles.playlist} >
          <Playlist playList={playList} playlistName={playlistName} handlePlaylistName={handlePlaylistName}
          handleDelete={handleDelete} savePlaylist={savingPlaylist} />
        </div>
        <div></div>
      </div>
      }
    </div>
  );
}

export default App;
