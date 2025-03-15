"use client";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

import useHeaderStore from "../stores/headerStore";
import { signUpFields,signInFields  } from "../settings/TS/FormFields";

export default function AuthModal() {
  const { isUserLoggedIn } = useHeaderStore();
  const setModalFalse = useHeaderStore(state=>state.setModalFalse);
  const [isSignUp, setIsSignUp] = useState(false);
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalRoot(document.body); // Встановлюємо body як контейнер для порталу
  }, []);

  const formFields = isSignUp ? signUpFields : signInFields;

  if (!portalRoot) return null; // Не рендерити, поки документ не доступний

  return createPortal(
    <section className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50">
      <div className="bg-black p-6 rounded-xl shadow-lg w-[400px] relative text-white">
        <button
          className="absolute top-3 right-3 text-white hover:text-gray-400"
          onClick={setModalFalse}
        >
          ✖
        </button>
        <h2 className="text-2xl font-semibold text-center mb-4">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>
        <form className="space-y-4">
          {formFields.map((field, index) => (
            <div key={index}>
              <label className="text-white block mb-1">{field.heading}</label>
              <input
                ref={(el) => { if (el) inputRefs.current[index] = el;}}
                type="text"
                placeholder={field.placeholder}
                className="w-full p-2 border rounded-md bg-gray-800 text-white placeholder-gray-400 border-gray-600"
              />
            </div>
          ))}
          <button
            className="w-full bg-white text-black py-2 rounded-md mt-4 font-semibold hover:bg-gray-300"
            onClick={(e) => {
              e.preventDefault();
              alert(isSignUp ? "Signing Up..." : "Signing In...");
            }}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <p className="text-center mt-4">
          {isSignUp ? "Already have an account? " : "Don't have an account? "}
          <span className="text-blue-400 cursor-pointer hover:underline" onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? "Log In" : "Sign Up"}
          </span>
        </p>
      </div>
    </section>,
    portalRoot
  );
}
