import { useState } from "react";

import "./App.css";

import Header from "./components/header";
import Footer from "./components/footer";
import Intro from "./blocks/intro";
import AboutUs from "./blocks/about";
import Services from "./blocks/services";
import Cases from "./blocks/cases";
import Process from "./blocks/process";
import Feedbacks from "./blocks/feedbacks";
import Application from "./blocks/application";
import Form from "./blocks/contactform";
import MobileMenu from "./blocks/mobile-menu"; // added here

function App() {
   const [isContactOpen, setContactOpen] = useState(false);
   const [isMenuOpen, setMenuOpen] = useState(false);

   function openContactForm() {
      setContactOpen(true);
   }
   const closeContactForm = () => setContactOpen(false);

   const openMenu = () => setMenuOpen(true);
   const closeMenu = () => setMenuOpen(false);

   const closeAll = () => {
      setContactOpen(false);
      setMenuOpen(false);
   };

   return (
      <>
         <Header
            onDiscussClick={openContactForm}
            onMenuToggle={openMenu}
         />
         <Intro onDiscussClick={openContactForm} />
         <AboutUs />
         <Services />
         <Cases />
         <Process />
         <Feedbacks />
         <Application />
         <Footer />

         {/* Shared Overlay */}
         {(isContactOpen || isMenuOpen) && (
            <div className="overlay show" onClick={closeAll}></div>
         )}

         {isContactOpen && (
            <Form isOpen={isContactOpen} onClose={closeContactForm} />
         )}

         {isMenuOpen && (
            <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
         )}
      </>
   );
}

export default App;
