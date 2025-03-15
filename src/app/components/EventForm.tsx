import { useState } from "react";
import { useCalendar } from "../stores/Calendar";

type FormDataType = {
  title: string;
  date: string;
  description: string;
  importance: "Low" | "Medium" | "High";
};

type FormField = {
  label: string;
  type: "text" | "date" | "textarea" | "select";
  name: keyof FormDataType;
  options?: string[];
};

type EventFormProps = {
  onClose: () => void;
};

export default function EventForm({ onClose }: EventFormProps) {
  const [formData, setFormData] = useState<FormDataType>({
    title: "",
    date: "",
    description: "",
    importance: "Low",
  });
  
  const deactivateCalendarModal = useCalendar(state => state.deactivateCalendarModal);

  const formFields: FormField[] = [
    { label: "Event Title", type: "text", name: "title" },
    { label: "Choose Date", type: "date", name: "date" },
    { label: "Describe your event", type: "textarea", name: "description" },
    { label: "Importance marker", type: "select", name: "importance", options: ["Low", "Medium", "High"] },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    
    <div className="flex justify-center items-center min-h-screen bg-black bg-opacity-50 fixed inset-0 text-black">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-96">
        <button 
          className="absolute top-2 right-2 text-black hover:text-gray-900" 
          onClick={() => { onClose(); deactivateCalendarModal(); }} 
          aria-label="Close form"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold text-black text-center mb-4">Event Form</h2>
        {formFields.map((field) => (
          <div key={field.name} className="mb-4">
            <label className="block text-black font-medium mb-1" htmlFor={field.name}>{field.label}</label>
            {field.type === "textarea" ? (
              <textarea 
                className="w-full p-2 border text-black rounded-md focus:ring-2 focus:ring-blue-400 placeholder-black" 
                id={field.name} 
                name={field.name} 
                placeholder={field.label} 
                value={formData[field.name]} 
                onChange={handleChange}
                rows={4}
              />
            ) : field.type === "select" ? (
              <select 
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 text-black"
                id={field.name} 
                name={field.name} 
                value={formData[field.name]} 
                onChange={handleChange}
              >
                {field.options?.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ) : (
              <input 
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 text-black placeholder-black" 
                id={field.name} 
                type={field.type} 
                name={field.name} 
                placeholder={field.label} 
                value={formData[field.name]} 
                onChange={handleChange}
              />
            )}
          </div>
        ))}
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
}
