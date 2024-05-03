import { Link } from "react-router-dom";
import FadeInSection from './FadeinSection';

const Navbar = ({ layout, isMobileHeader, applyFadeEffect }) => {
  const menuClass = layout === 'horizontal' ? 'flex' : 'flex-col';
  const textSize = isMobileHeader ? 'text-2xl' : 'text-sm';

  const navbarContent = (
    <nav className={`gap-10 flex uppercase text-gray-300 ${textSize} lg:flex ${menuClass}`}>
        <Link to="/">Home</Link>
        <Link to="/Masculino">Masculino</Link>
        <Link to="/Feminino">Feminino</Link>
        <Link to="/Calçados">Calçados</Link>
        <Link to="/Roupas">Roupas</Link>
    </nav>
  );

  return (
    <>
      {applyFadeEffect ? (
        <FadeInSection>
          {navbarContent}
        </FadeInSection>
      ) : (
        navbarContent
      )}
    </>
  );
}

export default Navbar;
