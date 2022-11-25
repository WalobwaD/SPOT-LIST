import React from "react" 

import "./ReadMe.css"

import { Link } from "react-router-dom"
export default class ReadMe extends React.Component{
    render(){
        return(
            <section className="read-sec">
                <div className="icon">
                    <Link to="/"><i className="fa-brands fa-spotify text-8xl"></i></Link>
                </div>
                <div className="about">
                    <h2 className="text-white text-2xl">ABOUT SPOT-LIST</h2>
                    <hr className="line"></hr>
                    <div>
                        <p className="about-p text-white font-light">Spot-List is a music app that allows you to search 
                        for tracks using either the track's artist,the actual name of the track. The app fetches data from
                            <a target="_blank" href="https://developer.spotify.com/discover/"> Spotify API </a> 
                            and displays the results inside the Results section. You're allowed to select the tracks of 
                            your choice and create a named album which will be pushed to spotify after saving the album!
                            Find the source code from my <a target="_blank" href="https://github.com/WalobwaD/SPOT-LIST">
                            <span className="fa-brands fa-github"></span> github.</a>
                        </p>
                    </div>
                    <h2 className="text-white text-2xl mt-8">USING SPOT-LIST</h2>
                    <hr className="line"></hr>
                    <div className="list text-white font-light">
                            <li>Search for a track of your choice by simply typing in the name of the song, artist or album.</li>
                            <li>The results of the searched songs will appear on the Results comlumn with all the suggested songs filtered by what you searched.</li>
                            <li>Tap on the plus icon to add a track to your playlist</li>
                            <li>Songs addes will appear on the playlist comlumn</li>
                            <li>Name the playlist as you wish and if satisfied with the songs added, save the playlist to your spotify account by clicking save to playlist.</li>
                            <li>Click on <span>View Spotify playlists</span> to check whether the playlist was added successfully to your spotify account.</li>
                    </div>

                </div>
            </section>
        )
    }
}