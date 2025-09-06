import React, { useState, useEffect } from "react";

const Header = () => {
   const [menuOpen, setMenuOpen] = useState(false);
   const [hidden, setHidden] = useState(false);
   const [lastScrollY, setLastScrollY] = useState(0);

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > lastScrollY) {
            setHidden(true); // scroll down → hide header-inner
         } else {
            setHidden(false); // scroll up → show header-inner
         }
         setLastScrollY(window.scrollY);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, [lastScrollY]);

   return (
      <header id="header" className="header">
         <div className="container">
            <div className={`header-inner ${hidden ? "hidden" : ""}`}>
               <div className="logo">
                  <img src="img/logo.svg" alt="Equipe" />
               </div>

               <div className="right">
                  <a href="#" className="project-btn">
                     Обсудить проект
                  </a>

                  <button
                     className="menu-btn"
                     onClick={() => setMenuOpen(!menuOpen)}
                  >
                     Меню <span className="burger-icon">☰</span>
                  </button>
               </div>
            </div>
         </div>

         {/* Overlay (independent from header-inner) */}
         {menuOpen && (
            <>
               <div
                  className={`menu-overlay ${menuOpen ? "show" : ""}`}
                  onClick={() => setMenuOpen(false)}
               ></div>

               {/* Mobile menu */}
               <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                  <div className="container">
                     <div className="menu-header">
                        <h2>Меню</h2>
                        <button
                           onClick={() => setMenuOpen(false)}
                           className="close-btn"
                        >
                           ✕
                        </button>
                     </div>
                     <nav className="menu-nav">
                        <div onClick={() => setMenuOpen(false)} className="navigation">
                           <a id="span">(01)</a>
                           <a href="#about">О нас</a>
                        </div>
                        <div onClick={() => setMenuOpen(false)} className="navigation">
                           <a id="span">(02)</a>
                           <a href="#services">Услуги</a>
                        </div>
                        <div onClick={() => setMenuOpen(false)} className="navigation">
                           <a id="span">(03)</a>
                           <a href="#case">Кейс</a>
                        </div>
                        <div onClick={() => setMenuOpen(false)} className="navigation">
                           <a id="span">(04)</a>
                           <a href="#how">Как мы работаем</a>
                        </div>
                        <div onClick={() => setMenuOpen(false)} className="navigation">
                           <a id="span">(05)</a>
                           <a href="#review">Отзыв</a>
                        </div>
                        <div onClick={() => setMenuOpen(false)} className="navigation">
                           <a id="span">(06)</a>
                           <a href="#contacts">Контакты</a>
                        </div>
                     </nav>
                     <div className="menu-footer">
                        <p>Политика конфиденциальности</p>
                        <p>Условия использования</p>
                     </div>
                  </div>
               </div>
            </>
         )}
      </header>
   );
};

export default Header;
