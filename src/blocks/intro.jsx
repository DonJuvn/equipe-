import React from "react";
export default function Intro() {
   return (
      <div id="intro">
        <div className="bottom-blur"></div>
        <div className="container">
          <div className="center">
            <h1>EQUIPE — команда, которая создаёт digital-решения</h1>
            <p>Разрабатываем сайты, интернет-магазины, маркетплейсы и проектируем удобные интерфейсы для приложений и SaaS-платформ.</p>
            <a href="#">Обсудить проект <img src="./img/link.svg" alt="" /></a>
          </div>
          <div className="services-btns">
            <a href="#">Многостраничный сайт<img src="./img/multipage.png" alt="" /></a>
            <a href="#">Интернет-магазины<img src="./img/shop.png" alt="" /></a>
            <a href="#">Маркетплейсы<img src="./img/marketplace.png" alt="" /></a>
            <a href="#">Лендинг<img src="./img/landing.png" alt="" /></a>
            <a href="#">Корпоративные сайты<img src="./img/cor.png" alt="" /></a>
            <a href="#">Продуктовый дизайн<img src="./img/design.png" alt="" /></a>
          </div>
        </div>
      </div>
   );
  }
  