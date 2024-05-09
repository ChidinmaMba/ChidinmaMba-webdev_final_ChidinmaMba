import React, { useState } from "react";
import EventCard from "./EventCard.jsx"
import eventTags from "../eventTags.js"

function PlanDay() {
    const [selected, setSelected] = useState([]);
    const [fetchedEvents, setFetchedEvents] = useState([]);


    const getEvents = ()=> {
        if (selected.length === 0) {
            return
        }
        var params = selected.join("+");
        var url = `/getEvents?eventtags=${params}`
        fetch(url).then(
            response => {
                return response.json()
            }
        )
        .then(
            data =>{
                setFetchedEvents(data)
            }
        )
    }

    const ammendSelected = (tag) => {
        if (selected.includes(tag)) {
            const index = selected.indexOf(tag);
            var copiedSelected = [...selected];
            copiedSelected.splice(index, 1);
            setSelected(copiedSelected);
        }
        else {
            setSelected([...selected, tag])
        }
    }
    return (
        <div style={{paddingLeft: "28px"}}>
            <h2>What are the vibes for today???😋</h2>
            {eventTags.map((tag) => {
                return (
                    <span className="tagChecker" onClick={() => ammendSelected(tag.tag)} style={{backgroundColor: selected.includes(tag.tag) ? 'rgba(213,213,213,0.5)' : 'white'}}>
                        <p>{tag.tagName} {tag.icon}</p>
                    </span>
                )
            })}
              
            <div className="tagSubmission" onClick={getEvents}><p>SUBMIT</p></div>

            <h2 style={{float:"left", marginLeft:"150px"}}>Check out your curated schedule! 😁</h2>
            {fetchedEvents.map((event)=> {
                return (
                    <div style={{float:"left", marginLeft:"135px"}}>
                    <EventCard
                        key={event.key}
                        eventInfo={event}
                    />
                    </div>
                )
            })}
        </div>
    )
}

export default PlanDay;