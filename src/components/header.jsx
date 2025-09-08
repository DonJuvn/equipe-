import React, { useState, useEffect } from "react";
import DiscussButton from "./discuss";

const Header = ({ onDiscussClick, onMenuToggle }) => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // add background after scrolling some pixels
      setScrolled(currentScrollY > 50);

      // hide on scroll down
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setHidden(true);
      } 
      // show on small scroll up
      else if (lastScrollY - currentScrollY > 1) {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      id="header"
      className={`header ${hidden ? "hidden" : ""} ${scrolled ? "scrolled" : ""}`}
    >
      <div className="container">
        <div className="header-inner">
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
