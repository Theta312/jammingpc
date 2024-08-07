import React, { useState } from 'react';
import Track from '../Track/Track.js';


export default function Tracklist({playList, playlistName, handlePlaylistName, handleDelete, savePlaylist}) {
    const [term, setTerm] = useState('');
    const handleChange = ({target}) => setTerm(target.value);

    const handleClick= event => {
        event.preventDefault();
        if (term === '') {
            return
        } else {
            handlePlaylistName(term);
        };
        setTerm('');
    } 


    return (
        <div>
            <Track playList={playList} playlistName={playlistName} 
             handleDelete={handleDelete} onChange={handleChange} onClick={handleClick} term={term} 
             savePlaylist={savePlaylist} />
        </div>
    )
};