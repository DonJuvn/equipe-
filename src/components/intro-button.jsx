import React from "react";import RevealOnScroll from "./reveal";

const ServiceButton = ({ href, text, icon }) => {
   return (
      <RevealOnScroll>
         <a href={href} className="service-btn">
            {text}
            <img src={icon} alt={text} />
         </a>
      </RevealOnScroll>
   );
};

export default ServiceButton;
