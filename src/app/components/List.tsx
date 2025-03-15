"use client";
import React from "react";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  importance: "normal" | "important" | "critical";
}

const events: Event[] = [
  { id: "1", title: "Team Meeting", date: "2025-03-15", time: "10:00", description: "Weekly sync-up with the team", importance: "important" },
  { id: "2", title: "Project Deadline", date: "2025-03-20", time: "23:59", description: "Submit final project version", importance: "critical" },
  { id: "3", title: "Lunch with Sarah", date: "2025-03-18", time: "13:00", description: "Discuss new marketing strategy", importance: "normal" },
];

const importanceColors = {
  normal: "bg-gray-100",
  important: "bg-yellow-100",
  critical: "bg-red-100",
};

export default function EventList() {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white shadow-md rounded-2xl text-gray-900">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Events</h2>
      {events.length > 0 ? (
        <ul className="space-y-4">
          {events.map((event) => (
            <li
              key={event.id}
              className={`p-4 border border-gray-300 rounded-lg shadow-sm ${importanceColors[event.importance]}`}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <span className="text-sm font-medium text-gray-600">
                  {event.date} | {event.time}
                </span>
              </div>
              <p className="text-gray-700 text-sm mt-2">{event.description}</p>
              <div className="flex justify-end gap-2 mt-2">
                <button className="text-blue-600 hover:underline">✏️ Edit</button>
                <button className="text-red-600 hover:underline">🗑️ Delete</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No events scheduled yet!</p>
      )}
    </div>
  );
}
