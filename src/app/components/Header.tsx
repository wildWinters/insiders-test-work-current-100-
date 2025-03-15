"use client"
import Image from "next/image";
import useHeaderStore from "../stores/headerStore";
import { popins500 } from "../fonts/fonts";
import { useRef } from "react";


export default function Header() {
  
    const   signIn = useRef(null);
    const  isUserLoggedIn  = useHeaderStore(state =>state.isUserLoggedIn);
    const  setModalTrue = useHeaderStore(state => state.setModalTrue);

    
  return (
    <header className={`w-full h-20 text-black bg-white flex items-center justify-between px-6 shadow-md ${popins500.className}`}>
      <div className="flex items-center gap-3">
        <Image 
          src="/img/free-icon-event-management-8834447.png" 
          alt="Event Planner Logo" 
          width={50} 
          height={50} 
          priority
        />
        <h1 className="text-2xl font-semibold">My Events</h1>
      </div>

      <button  
        ref = {signIn}
        className="text-lg px-4 py-2 w-25 bg-black text-white rounded-lg hover:bg-blue-700 transition duration-300"
        aria-label="Logout"
        onClick={setModalTrue}
      >
        {isUserLoggedIn ? "sign up" : " sign in" }
      </button>
    </header>
  );
}
