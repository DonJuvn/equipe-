import React from "react";import ContactForm from "../components/form";
import RevealOnScroll from "../components/reveal";

export default function Form({ isOpen, onClose }) {
   if (!isOpen) return null; // do not render if closed

   return (
      <div className="full-page-form">
         <RevealOnScroll>
            <div className="form-wrapper">
               <ContactForm />

               {/* Close button */}
               <button className="close-btn" onClick={onClose}>
                  ✕
               </button>
            </div>
         </RevealOnScroll>
      </div>
   );
}
