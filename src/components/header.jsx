import React, { useState, useEffect } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // скролл вниз → скрыть хедер
        setHidden(true);
      } else {
        // скролл вверх → показать хедер
        setHidden(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header id="header" className={hidden ? "header hidden" : "header"}>
      <div className="container">
        <div className="header-inner">
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

      {/* Мобильное меню */}
      {menuOpen && (
  <>
  {/* Overlay */}
  <div
    className={`menu-overlay ${menuOpen ? "show" : ""}`}
    onClick={() => setMenuOpen(false)}
  ></div>

  {/* Мобильное меню */}
  <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
    <div className="menu-header">
      <h2>Меню</h2>
      <button onClick={() => setMenuOpen(false)} className="close-btn">
        ✕
      </button>
    </div>
    <nav className="menu-nav">
      <a href="#about">(01) О нас</a>
      <a href="#services">(02) Услуги</a>
      <a href="#case">(03) Кейс</a>
      <a href="#how">(04) Как мы работаем</a>
      <a href="#review">(05) Отзыв</a>
      <a href="#contacts">(06) Контакты</a>
    </nav>
    <div className="menu-footer">
      <p>Политика конфиденциальности</p>
      <p>Условия использования</p>
    </div>
  </div>
</>

)}


    </header>
  );
};

export default Header;
