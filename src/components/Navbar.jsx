import React from "react";
import { Link } from "react-router-dom";
import FadeInSection from "./FadeinSection";

const Navbar = ({ layout, isMobileHeader, applyFadeEffect }) => {
  const menuClass = layout === "horizontal" ? "flex" : "flex-col";
  const textSize = isMobileHeader ? "text-2xl" : "text-sm";

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const navbarContent = (
    <nav
      className={`gap-10 flex uppercase text-gray-300 ${textSize} lg:flex ${menuClass}`}
    >
      <Link to="/Home" onClick={scrollToTop}>
        Home
      </Link>
      <Link to="/Masculino" onClick={scrollToTop}>
        Masculino
      </Link>
      <Link to="/Feminino" onClick={scrollToTop}>
        Feminino
      </Link>
      <Link to="/Calçados" onClick={scrollToTop}>
        Calçados
      </Link>
      <Link to="/Roupas" onClick={scrollToTop}>
        Roupas
      </Link>
    </nav>
  );

  return <>{applyFadeEffect ? <FadeInSection>{navbarContent}</FadeInSection> : navbarContent}</>;
};

export default Navbar;
