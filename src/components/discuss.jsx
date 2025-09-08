import React from "react";
const DiscussButton = ({ onDiscussClick}) => {
   return (
      <button onClick={onDiscussClick} id="discuss-button" href="#">
         Обсудить проект 
         <img id="blue" src="./img/link-blue.png" alt="" />
         <img id="white" src="./img/link.svg" alt="" />{" "}
      </button>
   );
};

export default DiscussButton;
