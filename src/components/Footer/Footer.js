import React from "react";

import "./Footer.css"


export default class Footer extends React.Component{
    render(){
        return(
            <section className="foot-sec">
                <h2 className="text-3xl text-white">View On Spotify</h2>
                <hr className="border-purple-700"></hr>
                <div className="image">
                    <a className="view" target="_blank" href="https://open.spotify.com/collection/playlists">View PlayList</a>
                    <p className="info">
                        Check your Spotify account if the playlist you just created above was added successfully, 
                        a playlist with the name you created alongside it should be visible, 
                        you can listen to the playlist on Spotify. Enjoy!
                    </p>
                </div>

                <div className="icons">

                    <i className="fa-brands fa-spotify text-green-500"></i>
                    <i className="fa-brands fa-github"></i>
                    <i className="fa-brands fa-twitter text-blue-400"></i>
                    <i className="fa-brands fa-instagram text-pink-500"></i>
                    <i className="fa-brands fa-linkedin text-blue-800"></i>
                    

                </div>
            </section>
        )
    }
}