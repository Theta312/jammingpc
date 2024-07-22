import React, { useCallback } from 'react';
import styles from './Track.module.css';


export default function Track({playList, playlistName, handleDelete, 
    onChange, onClick, term, savePlaylist}) {

    return (
        <div className={styles.playlist}>
            <div className={styles.playlistName} >
                <form onSubmit={onClick}>
                    <label for='playlist'>
                        {!playlistName ? 'Playlist' : playlistName}
                    </label>
                    <input type='text' id='playlist' value={term} name='playlistName' onChange={onChange} />
                    <button type='submit' >Rename Playlist</button>
                </form>
            </div>
            <div className={styles.playlistSongs}>
                {
                    playList.map(song => {
                       return ( 
                        <div key={song.id} className={styles.addedSongs}>
                            <div className={styles.information}>
                                <h4>{song.name}</h4>
                                <h5>by {song.artist}</h5>
                                <h5>{song.album}</h5>
                            </div>
                            <button type='button' onClick={() => handleDelete(song)}>-</button>
                        </div>
                       )
                    })
                }
            </div>
            <div>
                <button className={styles.save} type='button' onClick={savePlaylist} >Save Playlist To Spotify</button>
            </div>
            
        </div>
    )
}