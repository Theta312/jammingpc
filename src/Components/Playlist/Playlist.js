import React from 'react';
import Tracklist from '../Tracklist/Tracklist.js';



export default function Playlist({playList, playlistName, handlePlaylistName, handleDelete, savePlaylist}) {
    return (
        <div>
             <Tracklist playList={playList} playlistName={playlistName} handlePlaylistName={handlePlaylistName}
                handleDelete={handleDelete} savePlaylist={savePlaylist}  />
        </div>
    )
};