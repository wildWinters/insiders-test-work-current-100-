"use client";
import React from "react";
import Button from "./Buttons";
import { useCalendar } from "../stores/Calendar";
//! CRUD operation  all
export default function Calendar() {  
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  // const  isCalendarModalActive = useCalendar(state => state.isCalendarModal);
  const  activateCalendarModal = useCalendar(state => state.activateCalendarModal);
  const  deactivateCalendarModal = useCalendar(state => state.deactivateCalendarModal);


  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg">

      <div className="flex justify-between items-center mb-4">
        <button className="text-black">&lt; Back</button>
        <h2 className="text-xl font-bold">March 2025</h2>
        <button className="text-black">Next &gt;</button>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-2 text-center font-semibold text-gray-600">
        {daysOfWeek.map((day) => (
          <div key={day} className="p-2">
            {day}
          </div>
        ))}
      </div>


      <div className="grid grid-cols-7 gap-2">
        {daysInMonth.map((day) => (
          <div
            key={day}
            className="p-4 border rounded-md hover:bg-gray-100 cursor-pointer flex flex-col items-center justify-between"
          >
            <span className="font-bold text-lg">{day}</span>
            <button className="mt-2 text-sm text-blue-500 hover:underline" onClick={activateCalendarModal}>+ Add</button>
          </div>
        ))}
      </div>
      <div className="flex justify-left gap-4 mt-[20px]">
        <Button text="Delete" activateModal={activateCalendarModal} /> 
        <Button text="Edit"  activateModal={activateCalendarModal} />
      </div>
    </div>
  );
}
