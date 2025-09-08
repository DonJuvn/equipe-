import React, { useState, useEffect } from "react";
import DiscussButton from "./discuss";

const Header = ({ onDiscussClick, onMenuToggle }) => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
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
            <DiscussButton onDiscussClick={onDiscussClick} />
            <button className="menu-btn" onClick={onMenuToggle}>
              Меню <span className="burger-icon">☰</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
