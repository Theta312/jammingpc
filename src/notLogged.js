import React, { useState } from 'react';

export default function NotLogged({onClick}) {

    const clientId = '739d8a6d32984bd8ab2358283037e890';
    const redirectUri = 'http://localhost:3000';
    const Auth_ENDPOINT = 'https://accounts.spotify.com/authorize';
    const Response_type = 'token';
   

    return (
        <div>
            <h1>Welcome to My Spotify React</h1>
            <h4>Login to Spotify</h4>
            <h3 onClick={onClick} >Please Log-in</h3>
        </div>
    )
}