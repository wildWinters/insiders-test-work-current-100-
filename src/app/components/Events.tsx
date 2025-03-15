"use client";
import { useEffect, useState } from "react";
import { addEvent, getEvents, deleteEvent } from "../lib/events";

export default function Events() {
  const [events, setEvents] = useState<any[]>([]);
  const [newEvent, setNewEvent] = useState({ title: "", date: "", description: "", priority: "normal", userId: "" });

  useEffect(() => {
    async function fetchEvents() {
      const data = await getEvents();
      setEvents(data);
    }
    fetchEvents();
  }, []);

  const handleAddEvent = async () => {
    await addEvent(newEvent);
    setNewEvent({ title: "", date: "", description: "", priority: "normal", userId: "" });
  };

  return (
    <div>
      <h2>Events</h2>
      <input type="text" placeholder="Title" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
      <input type="date" value={newEvent.date} onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })} />
      <button onClick={handleAddEvent}>Add Event</button>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            {event.title} - {event.date} <button onClick={() => deleteEvent(event.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
