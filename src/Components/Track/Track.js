import React from 'react';



export default function Track({playList, playlistName, handleDelete, 
    onChange, onClick, term}) {


    


    return (
        <div>
            <div>
                <form onSubmit={onClick}>
                    <label for='playlist'>
                        {!playlistName ? 'Playlist' : playlistName}
                    </label>
                    <input type='text' id='playlist' value={term} name='playlistName' onChange={onChange} />
                    <button type='submit'>Rename Playlist</button>
                </form>
            </div>
            <div>
                {
                    playList.map(song => {
                       return ( 
                        <div key={song.id}>
                            <h4>{song.name}</h4>
                            <h5>by {song.artist}</h5>
                            <h5>{song.album}</h5>
                            <button type='button' onClick={() => handleDelete(song)}>-</button>
                        </div>
                       )
                    })
                }
            </div>
            <div>
                <button>Save Playlist To Spotify</button>
            </div>
        </div>
    )
}