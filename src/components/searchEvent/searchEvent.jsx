import React, { useState } from "react";

const eventData = [
    { name: "Independence Day", date: "15th September", address: "Mathurapur", type: "past" },
    { name: "Independence Day", date: "16th September", address: "Mathurapur", type: "past" },
    { name: "Independence Day", date: "17th September", address: "Mathurapur", type: "past" },
    { name: "Independence Day", date: "18th September", address: "Mathurapur", type: "past" },
    { name: "Independence Day", date: "19th September", address: "Mathurapur", type: "past" },
    { name: "Independence Day", date: "20th September", address: "Mathurapur", type: "future" },
    { name: "Independence Day", date: "21st September", address: "Mathurapur", type: "future" },
    { name: "Independence Day", date: "23rd September", address: "Mathurapur", type: "future" },
    { name: "Independence Day", date: "22nd September", address: "Mathurapur", type: "future" },
    { name: "Independence Day", date: "23rd September", address: "Mathurapur", type: "future" },
    { name: "Independence Day", date: "24th September", address: "Mathurapur", type: "future" },
    { name: "Independence Day", date: "25th September", address: "Mathurapur", type: "future" },
];


function SearchEvent() {
    const [filter, setFilter] = useState("future");

    const filteredEvents = eventData.filter(event => event.type === filter);

    return (
        <>

            <section className="banner">
                <img src="banner/event_manager.png" alt="Event Manager" />
                <div className="container">
                    <h1 style={{ textAlign: "center" }}>
                        <u>Events</u></h1>
                    <select
                        name="select"
                        id="select"
                        value={filter}
                        onChange={e => setFilter(e.target.value)}
                    >
                        <option value="future">Upcomming Events</option>
                        <option value="past">Past Events</option>
                    </select>
                    <div className="dropdown"></div>

                    <table
                        border="3"
                        id="listing"
                        style={{ width: "100%", textAlign: "center", borderCollapse: "collapse" }}
                    >

                        <thead>
                            <tr>
                                <th>Events</th>
                                <th>Date</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredEvents.map((event, index) => (
                                <tr key={index}>
                                    <th>{event.name}</th>
                                    <td>{event.date}</td>
                                    <td>{event.address}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );

}

export default SearchEvent;