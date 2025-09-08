import React from "react";import Title from "./title";
export default function SocMedia() {
   return (
      <div id="soc-media">
         <div className="container">
            <div className="logo">
               <img src="img/logo.svg" alt="Equipe" />
               <p>команда, которая создаёт digital-решения</p>
            </div>

            <div className="media">
               <Title text={"instagram"} />
               <Title text={"whatsapp"} />
               <Title text={"linked in"} />
            </div>
            <img id='group' src="./img/Group.png" alt="" />
         </div>
      </div>
   );
}
