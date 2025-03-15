

export const signUpFields = [
    { heading: "Full Name", placeholder: "Name Surname" },
    { heading: "Your Email", placeholder: "Email" },
    { heading: "Password", placeholder: "Password" },
    { heading: "Your Phone", placeholder: "Phone" },
  ];
  
  export const signInFields = [
    { heading: "Your Email", placeholder: "Mail" },
    { heading: "Password", placeholder: "Password" },
  ];
   

  interface EventField {
    label: string;
    type: "text" | "date" | "textarea" | "select";
    name: string;
    options?: string[];
  }
  
  const addEventForm = [
    { label: "Event Title", type: "text", name: "title" },
    { label: "Choose Date", type: "date", name: "date" },
    { label: "Describe your event", type: "textarea", name: "description" },
    { label: "Importance marker", type: "select", name: "importance", options: ["Low", "Medium", "High"] }
  ];
