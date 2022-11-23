import React from "react"
import "./NavBar.css"

export default class NavBar extends React.Component{
    render(){
        return(
            <section>
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
                        <i class="fa-brands fa-spotify"></i>
                    </div>
                </nav>
            </section>
        )
    }
}