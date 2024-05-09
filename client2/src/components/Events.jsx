import React, {useState, useEffect} from "react";
import EventCard from "./EventCard.jsx"
// import events from "../events.js";


function Events() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        var url = `/getSomeEvents`
        fetch(url).then(
            response => {
                return response.json()
            }
        )
        .then(
            data =>{
                setEvents(data)
            }
        )
      }, []);

    return (
        <div className="events">   
            <h1>Recommended Events</h1>
            {
                events.map((event)=>{
                    return(
                    <EventCard
                        key={event.key}
                        eventInfo={event}
                    />
                    )
                })
            }
        </div>
    )
}
export default Events;