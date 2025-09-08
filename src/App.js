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

function App() {
   const [isContactOpen, setContactOpen] = useState(false);
   const [isMenuOpen, setMenuOpen] = useState(false);

   function openContactForm() {
       setContactOpen(!isContactOpen);
       console.log("worked");
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
            menuOpen={isMenuOpen}
            onMenuToggle={() => setMenuOpen(!isMenuOpen)}
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

         {(isContactOpen) && (
         <Form isOpen={isContactOpen} onClose={closeContactForm} />
      )}
      </>
   );
}

export default App;
