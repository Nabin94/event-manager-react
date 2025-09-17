import './createevent.scss'
import React, { useState } from "react";

function CreateEvent() {
  const [form, setForm] = useState({
    eventName: "",
    dateTime: "",
    address: "",
    eventType: "",
    eventDescription: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});

  const validEventName = (eventName) => {
    if (!eventName || eventName.length < 3 || eventName.length > 20) return false;
    const pattern = /^[a-zA-Z0-9._\s]+$/;
    return pattern.test(eventName);
  };

  const validDateTime = (dateTime) => {
    if (!dateTime) return false;
    const dateFormat = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return dateFormat.test(dateTime);
  };

  const validAddress = (address) => {
    if (!address) return false;
    const addressPattern = /^[a-zA-Z\s,.\'-]{10,}$/;
    return addressPattern.test(address);
  };

  const validEventType = (eventType) => {
    if (!eventType) return false;
    const eventPattern = /^[a-zA-Z._\s,.\'-]+$/;
    return eventPattern.test(eventType);
  };

  const validEventDescription = (eventDescription) => {
    if (!eventDescription || eventDescription.length < 10 || eventDescription.length > 30) return false;
    const descriptionPattern = /^[a-zA-Z._\s,.\'-]+$/;
    return descriptionPattern.test(eventDescription);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!validEventName(form.eventName)) {
      newErrors.eventName =
        "Invalid Event Name. Must be alphanumeric and 3–20 characters.";
    }
    if (!validDateTime(form.dateTime)) {
      newErrors.dateTime = "Invalid Date Time. Format must be dd/mm/yyyy.";
    }
    if (!validAddress(form.address)) {
      newErrors.address =
        "Invalid Address. Must be alphabetical and at least 10 characters.";
    }
    if (!validEventType(form.eventType)) {
      newErrors.eventType =
        "Invalid Event Type. Must be alphabetical and at least 4 characters.";
    }
    if (!validEventDescription(form.eventDescription)) {
      newErrors.eventDescription =
        "Invalid Event Description. Must be 10–30 alphabetical characters.";
    }
    if (!form.termsAccepted) {
      newErrors.termsAccepted = "You must accept the terms and conditions.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      let events = JSON.parse(localStorage.getItem("events")) || [];
      events.push(form);
      localStorage.setItem("events", JSON.stringify(events));
      alert("Event Saved!");
      window.location.href = "success.html";
    }
  };

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

            <form onSubmit={handleSubmit}>
              <div className="input-element">
                <label>Event Name</label>
                <div>
                  <input type="text" name="eventName" value={form.eventName} onChange={handleChange} />
                </div>
                {errors.eventName && (
                  <span className="error-msg">{errors.eventName}</span>
                )}
              </div>

              <div className="input-element">
                <label>Date & Time</label>
                <div>
                  <input type="text" name="dateTime" value={form.dateTime} onChange={handleChange} />
                </div>
                {errors.dateTime && (
                  <span className="error-msg">{errors.dateTime}</span>
                )}
              </div>

              <div className="input-element">
                <label>Address</label>
                <div>
                  <textarea name="address" rows="4" cols="50" value={form.address} onChange={handleChange}></textarea>
                </div>
                {errors.address && (
                  <span className="error-msg">{errors.address}</span>
                )}
              </div>

              <div className="input-element">
                <label>Event Type</label>
                <div>
                  <input type="text" name="eventType" value={form.eventType} onChange={handleChange} />
                </div>
                {errors.eventType && (
                  <span className="error-msg">{errors.eventType}</span>
                )}
              </div>

              <div className="input-element">
                <label>Event Description</label>
                <div>
                  <textarea name="eventDescription" rows="4" cols="50" value={form.eventDescription} onChange={handleChange}></textarea>
                </div>
                {errors.eventDescription && (
                  <span className="error-msg">{errors.eventDescription}</span>
                )}
              </div>

              <div className="input-element">
                <input type="checkbox" name="termsAccepted" checked={form.termsAccepted} onChange={handleChange} />{" "}
                I accept the terms
                {errors.termsAccepted && (
                  <p className="error-msg">{errors.termsAccepted}</p>
                )}
              </div>

              <div className="input-element">
                <h6 className="event-read-terms"><u>Read our T&Cs</u></h6>
              </div>

              <button className="event-button" type="submit">Confirm</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateEvent;

