import { Link } from "react-router-dom"
import FadeInSection from "./FadeinSection";

const Navbar = ({ layout, isMobileHeader }) => {
  const menuClass = layout === 'horizontal' ? 'flex' : 'flex-col';
  const textSize = isMobileHeader ? 'text-2xl' : 'text-sm';


  return (
    <FadeInSection>
    <nav className={`gap-10 flex text-gray-300 ${textSize} lg:flex ${menuClass}`}>
        <Link to="/">Home</Link>
        <Link to="/Masculino">Masculino</Link>
        <Link to="/Feminino">Feminino</Link>
        <Link to="/Calçados">Calçados</Link>
        <Link to="/Roupas">Roupas</Link>
        
    </nav>
    </FadeInSection>
  )
}

export default Navbar