import React from "react";import DiscussButton from "./discuss";
import RevealOnScroll from "./reveal";

const Service = ({ title, text, price, img }) => {
   return (
      <RevealOnScroll>
         <div className="service">
            <div className="container">
               <div className="title">
               <h1>{title}</h1>
               <p id="text">{text}</p>
               </div>
               <p id="price">{price}</p>
               <div className="button">
                  <img src={img} alt="" />
                  <DiscussButton />
               </div>
            </div>
         </div>
      </RevealOnScroll>
   );
};

export default Service;
