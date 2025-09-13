import './createevent.scss'

export default function createEvent() {
    return (
        <div>
            <div className="heading">
                <img src="Well-come.png" />
                <h1>CREATE EVENT</h1>
                <h2>Welcome</h2>
            </div>

            <div className="container">
                <div className="eventcontainer">
                    <div className="event">
                        <h3>Add Your Event</h3>
                        <br />
                        <div className="input-element">
                            <label> Event Name</label>
                            <div> <input type="text" name="eventName" id="eventName" /></div>
                            <span className="error-msg" id="eventNameErr"></span>
                        </div>
                        <div className="input-element">
                            <label> Date & Time</label>
                            <div><input type="text" name="date_time" id="dateTime" /></div>
                            <span className="error-msg" id="dateTimeErr"></span>
                        </div>
                        <div className="input-element">
                            <label> Address</label>
                            <div><textarea id="address" name="address" rows="4" cols="50"></textarea></div>
                            <span className="error-msg" id="addressErr"></span>
                        </div>
                        <div className="input-element">
                            <label> Event Type</label>
                            <div><input type="text" name="event_type" id="eventType" /></div>
                            <span className="error-msg" id="eventTypeErr"></span>
                        </div>
                        <div className="input-element">
                            <label> Event Description</label>
                            <div> <textarea id="eventDescription" name="event_description" rows="4" cols="50"> </textarea></div>
                            <span className="error-msg" id="event_descriptionErr"></span>
                        </div>
                        <div className="input-element">
                            <input type="checkbox" /> I accept the terms
                        </div>
                        <div className="input-element">
                            <h6 className="event-read-terms"><u>Read our T&Cs</u></h6>
                        </div>
                        <button className="event-button" onclick="submit()">Confirm</button>

                    </div>
                </div>
            </div>
        </div>

    )
}