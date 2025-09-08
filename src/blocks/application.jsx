import React from "react";
import ContactForm from "../components/form";
import Title from "../components/title";
import SocMedia from "../components/soc-media";
import RevealOnScroll from "../components/reveal";

export default function Application() {
   return (
      <section id="application">
         <div className="container">
            <RevealOnScroll>
               <Title text={"Контакты"} />
            </RevealOnScroll>{" "}
            <RevealOnScroll>
               <div className="application">
                  <ContactForm />
                  <SocMedia />
               </div>
            </RevealOnScroll>
         </div>
      </section>
   );
}
