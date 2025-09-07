import React from "react";
import RevealOnScroll from "./reveal";
const Case = ({ link, img, title, type }) => {
   return (
      <a href={link} className="case">
         <RevealOnScroll>
            <img id="pr-img" src={img} alt="" />
            <div className="tablet">
               <div className="container">
                  <div className="about-project">
                     <h1>{title}</h1>
                     <p>{type}</p>
                  </div>
                  <img src="./img/link-blue.png" alt="" />
               </div>
            </div>
         </RevealOnScroll>
      </a>
   );
};

export default Case;
