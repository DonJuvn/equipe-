import React from "react";
import RevealOnScroll from "./reveal";

const Phase = ({ img, phase, action, description }) => {
   return (
      <RevealOnScroll>
         <div className="phase">
         <div className="tablet">
            <img src={img} alt={phase} />
            <p>{phase}</p>
         </div>
         <h1>{action}</h1>
         <p id="description">{description}</p>
      </div>
      </RevealOnScroll>
   );
};

export default Phase;
