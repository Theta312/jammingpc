import React from 'react';
import styles from './SearchResult.module.css';



export default function SearchResult({handlePlaylist, searchResult}) {


    return (
        <div className={styles.searchResults}>
            <div>
                <h3>Search Results</h3>
            </div>
            <div className={styles.resultos}>
                {
                    searchResult.map(song => {
                        return (
                            <div key={song.id} className={styles.song}>
                                <div className={styles.information}>
                                    <h4>{song.name}</h4>
                                    <p>By: {song.artist}</p>
                                    <p>Album: {song.album}</p>
                                </div>
                                <button type='button' onClick={() => handlePlaylist(song)} >+</button>                                
                            </div>
                        )
                    })
                }
            </div>        
        
        </div>
    )
}