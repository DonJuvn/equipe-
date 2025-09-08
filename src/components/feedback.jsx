import React from "react";
import RevealOnScroll from "./reveal";
const FeedBack = ({ rating, name, post, description }) => {
   return (
      <RevealOnScroll>
         <div className="feedback">
            <div className="container">
               <div className="header-fb">
                  <div className="rating">
                     <img src="./img/star.png" alt="" />
                     <p id="rating">{rating}</p>
                  </div>
                  <div className="info">
                     <h1>{name}</h1>
                     <p>{post}</p>
                  </div>
               </div>
               <p id="desc">{description}</p>
            </div>
         </div>
      </RevealOnScroll>
   );
};

export default FeedBack;
