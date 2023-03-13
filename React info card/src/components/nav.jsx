import React from "react"
import Logo from "../assets/react.svg"

export default function Navbar(){
    return(
        <nav>
            <div className="logo">
                <img src={ Logo } className="react-logo"/>
                <h3>ReactFacts</h3>
            </div>
            <div className="project-title">
                <h4>React Course - Project 1</h4>
            </div>
        </nav>
    )
}