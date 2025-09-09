import React, { useRef, useState } from "react";
import Title from "../components/title";
import RevealOnScroll from "../components/reveal";
import Case from "../components/case";

export default function Cases() {
   const [active, setActive] = useState(null);
   const containerRef = useRef(null);

   // function to get scroll length based on screen width
   const getScrollAmount = () => {
      if (window.innerWidth <= 768) {
         return 386.125; // smaller scroll for mobile
      }
      return 700; // default for desktop
   };

   const onPrev = () => {
      containerRef.current.scrollBy({
         left: -getScrollAmount(),
         behavior: "smooth",
      });
      setActive("prev");
   };

   const onNext = () => {
      containerRef.current.scrollBy({
         left: getScrollAmount(),
         behavior: "smooth",
      });
      setActive("next");
   };

   const casesData = [
      { link: "/project-1", img: "/img/netdev.png", title: "Parfoa", type: "E-Shop" },
      { link: "/project-2", img: "/img/netdev.png", title: "Otpan news", type: "E-commerce" },
      { link: "/project-3", img: "/img/netdev.png", title: "NetDev.kz", type: "Mobile App" },
      { link: "/project-4", img: "/img/netdev.png", title: "Another Project", type: "Web App" },
   ];

   return (
      <section id="cases">
         <div className="container">
            <RevealOnScroll>
               <div className="cases-title">
                  <Title text={"Кейсы"} />
                  <div className="nav-buttons">
                     <button
                        className={`nav-btn ${active === "prev" ? "active" : ""}`}
                        onClick={onPrev}
                     >
                        &#10094;
                     </button>
                     <button
                        className={`nav-btn ${active === "next" ? "active" : ""}`}
                        onClick={onNext}
                     >
                        &#10095;
                     </button>
                  </div>
               </div>
            </RevealOnScroll>

            <div className="cases" ref={containerRef}>
               {casesData.map((item, index) => (
                  <Case
                     key={index}
                     link={item.link}
                     img={item.img}
                     title={item.title}
                     type={item.type}
                  />
               ))}
            </div>
         </div>
      </section>
   );
}
