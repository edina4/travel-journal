import React from "react";

export default function Navbar(){
    return(
        <div className="nav-bar">
            <img src={require("./globe-icon.png")} className="globe--icon" alt=""/>
            <h1>my travel journal</h1>
        </div>
    )
}