import React from "react";
import ServiceButton from "../components/intro-button";
import RevealOnScroll from "../components/reveal";

export default function Intro() {
   return (
      <div id="intro">
         <div className="bottom-blur"></div>
         <div className="container">
            <RevealOnScroll>
               <div className="center">
                  <h1>EQUIPE — команда, которая создаёт digital-решения</h1>
                  <p>
                     Разрабатываем сайты, интернет-магазины, маркетплейсы и
                     проектируем удобные интерфейсы для приложений и
                     SaaS-платформ.
                  </p>
                  <a href="#">
                     Обсудить проект <img src="./img/link.svg" alt="" />
                  </a>
               </div>
            </RevealOnScroll>

            <RevealOnScroll>
               <div className="services-btns">
                  <ServiceButton
                     href="#"
                     text="Многостраничный сайт"
                     icon="./img/multipage.png"
                  />
                  <ServiceButton
                     href="#"
                     text="Интернет-магазины"
                     icon="./img/shop.png"
                  />
                  <ServiceButton
                     href="#"
                     text="Маркетплейсы"
                     icon="./img/marketplace.png"
                  />
                  <ServiceButton
                     href="#"
                     text="Лендинг"
                     icon="./img/landing.png"
                  />
                  <ServiceButton
                     href="#"
                     text="Корпоративные сайты"
                     icon="./img/cor.png"
                  />
                  <ServiceButton
                     href="#"
                     text="Продуктовый дизайн"
                     icon="./img/design.png"
                  />
               </div>
            </RevealOnScroll>
         </div>
      </div>
   );
}
