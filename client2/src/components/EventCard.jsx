import React from "react";
import "../styles.css";

function EventCard(props) {
    return (
        <div className="eventcard">
            <img src={props.eventInfo.image_path} alt="bar photo" style={{height:"200px"}}/>
            <div style={{display:"inline-block"}}>
                <h2>{props.eventInfo.name}</h2>
                <p>{props.eventInfo.description}</p>
            </div>
        </div>
    )
}

export default EventCard