import React from "react";

export default function Article(props){
    return(
        <div className="artcl--container">
            <img src={props.picture} className="artcl--img" alt=""/>
            <div>
                <div className="loc--container">
                    <img src={require("./loc-icon.png")} className="loc--icon" alt=""/><span>{props.country}</span>
                    <a href={props.googlemapsUrl} className="maps--link">View on Google Maps</a>
                </div>
                <h1 className="title">{props.title}</h1>
                <p className="date">{props.date}</p>
                <p className="text">{props.text}</p>
            </div>
        </div>
    )
}