import React from 'react';




export default function SearchResult({handlePlaylist, searchResult}) {


    return (
        <div>
            <div>
                <h3>Search Results</h3>
            </div>
            <div>
                {
                    searchResult.map(song => {
                        return (
                            <div key={song.id}>
                                <h4>{song.name}</h4>
                                <p>By: {song.artist}</p>
                                <p>Album: {song.album}</p>
                                <button type='button' onClick={() => handlePlaylist(song)} >+</button>                                
                            </div>
                        )
                    })
                }
            </div>        
        
        </div>
    )
}