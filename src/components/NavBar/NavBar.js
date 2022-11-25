import React from "react"
import "./NavBar.css"
import { Link } from "react-router-dom"


import ReadMe from "../ReadMe/ReadMe"
export default class NavBar extends React.Component{
    render(){
        return(
            <section className="nav-sec">
                <nav>
                    <div className="music">
                        <div className="bar"></div>

                        <div className="bar"></div>

                        <div className="bar"></div>

                        <div className="bar"></div>

                        <div className="bar"></div>

                        <div className="bar"></div>

                        <div className="bar"></div>

                        <div className="bar"></div>

                        <div className="bar"></div>

                        <div className="bar"></div>
                    </div>
                    <div className="icon">
                        <i className="fa-brands fa-spotify text-2xl text-purple-600"><span className="pl-2">Spot-List</span></i>
                    </div>
                    <div className="readme">
                        <Link to="readme">Read Me!</Link>
                    </div>
                </nav>
            </section>
        )
    }
}