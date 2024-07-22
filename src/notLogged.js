import React, { useState } from 'react';
import styles from './notLogged.module.css';




export default function NotLogged({onClick}) {

    return (
        <div className={styles.body} >
            <h1>Welcome to My Spotify React</h1>
            <h4>Login to Spotify</h4>
            <h3 onClick={onClick}>Please Log-in</h3>
        </div>
    )
}