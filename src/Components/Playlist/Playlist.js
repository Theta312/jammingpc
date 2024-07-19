import React from 'react';
import Tracklist from '../Tracklist/Tracklist.js';



export default function Playlist({playList, playlistName, handlePlaylistName, handleDelete}) {
    return (
        <div>
            <Tracklist playList={playList} playlistName={playlistName} handlePlaylistName={handlePlaylistName}
            handleDelete={handleDelete}   />
        </div>
    )
};