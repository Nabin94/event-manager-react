/*1. Create a component
  2. Use useEffect to get localstorage data 
  3. Use mapping to select the seperate datas
  4. Append the eventCard varibale using spread operator 
*/

import { useEffect, useState } from "react";

function LoadEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = localStorage.getItem("events");
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents) || []);
    }
  }, []);

  return events.map((event) => {
    console.log(event);
    const eventName = event["eventName"];
    const eventdate = event["dateTime"];
    const description = event["eventDescription"];
    console.log(eventName);
    console.log(eventdate);
    console.log(description);

    return (
      <div class="card">
        <div class="card-contents">
          <div class="card-icon">
            <i class="fa-solid fa-circle-info"></i>
          </div>
          <div class="card-section">
            <h1>{eventName}</h1>
            <h2>{eventdate}</h2>
            <p>{description}</p>
            <button class="card-action"> Read More</button>
          </div>
        </div>
      </div>
    );
  });
}

export default LoadEvents;
