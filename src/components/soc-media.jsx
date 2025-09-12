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
               <a href="https://www.instagram.com/equipe_teaam/">
                  <Title text={"instagram"} />
               </a>
               <a href="https://wa.me/77077545662?text=Сәлеметсіз%20бе,%20сіздерге%20проект%20жасатқым%20келеді.">
                  <Title text={"whatsapp"} />
               </a>
               <a href="https://www.linkedin.com/company/equipe-team/">
                  <Title text={"linked in"} />
               </a>
            </div>
            <img id="group" src="./img/Group.png" alt="" />
         </div>
      </div>
   );
}
