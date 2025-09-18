import React, { useState, useEffect } from "react";

function parseDate(dateStr) {
  if (!dateStr || !dateStr.trim()) return new Date(1972, 2, 1);

  const [day, month, year] = dateStr.split("/");
  const parsed = new Date(year, month - 1, day);

  return isNaN(parsed) ? new Date(1972, 2, 1) : parsed;
}

export default function EventTable() {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState("future"); // default filter

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents);
  }, []);

  const now = new Date();
  const filteredEvents = events.filter(evnt => {
    const dateTime = parseDate(evnt.dateTime);
    return filter === "future" ? dateTime >= now : dateTime < now;
  });

  return (
    <div>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="future">Future Events</option>
        <option value="past">Past Events</option>
      </select>

      <table border="1" style={{ marginTop: "10px", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>DateTime</th>
          </tr>
        </thead>
        <tbody>
          {filteredEvents.length > 0 ? (
            filteredEvents.map((evnt, idx) => (
              <tr key={idx}>
                <td>{evnt.name || "Unnamed Event"}</td>
                <td>{evnt.dateTime || "-"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No events found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
