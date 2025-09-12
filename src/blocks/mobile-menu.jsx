import React from "react";
import RevealOnScroll from "../components/reveal";

const MobileMenu = ({ isOpen, onClose }) => {
   return (
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
         <RevealOnScroll>
            <div className="container">
               <div className="menu-header">
                  <h2>Меню</h2>
                  <button onClick={onClose} className="close-btn">
                     ✕
                  </button>
               </div>

               <nav className="menu-nav">
                  <div onClick={onClose} className="navigation">
                     <a id="span">(01)</a>
                     <a href="#about">О нас</a>
                  </div>
                  <div onClick={onClose} className="navigation">
                     <a id="span">(02)</a>
                     <a href="#services">Услуги</a>
                  </div>
                  <div onClick={onClose} className="navigation">
                     <a id="span">(03)</a>
                     <a href="#cases">Кейс</a>
                  </div>
                  <div onClick={onClose} className="navigation">
                     <a id="span">(04)</a>
                     <a href="#process">Как мы работаем</a>
                  </div>
                  <div onClick={onClose} className="navigation">
                     <a id="span">(05)</a>
                     <a href="#feedbacks">Отзыв</a>
                  </div>
                  <div onClick={onClose} className="navigation">
                     <a id="span">(06)</a>
                     <a href="#application">Контакты</a>
                  </div>
               </nav>

               <RevealOnScroll>
                  <div className="menu-footer">
                     <p>Политика конфиденциальности</p>
                     <p>Условия использования</p>
                  </div>
               </RevealOnScroll>
            </div>
         </RevealOnScroll>
      </div>
   );
};

export default MobileMenu;
