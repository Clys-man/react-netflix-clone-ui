import React from 'react'
import './index.css'

export default ({ black }) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="img" />
                </a>
            </div>
            <ul className="header--buttons">
                <li><strong><a href="#">Home</a></strong></li>
                <li><a href="#">Series</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">Most Recents</a></li>
                <li><a href="#">My List</a></li>
            </ul>
            <div className="header--box">
                <a href="">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="img" />
                </a>
            </div>
        </header>
    );
}
