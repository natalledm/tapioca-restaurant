import { Link } from "react-router-dom";
import logo from '../../assets/images/tapioca-nav-logo.png';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navigation-bar">
      <ul className="nav-links-list">
        <li><Link to="/"><img src={logo} alt="Tapioca logo" className="nav-logo" /></Link></li>
        <span className="nav-links-items-container">
          <li><Link to="/dishes">Dishes</Link></li>
          <li><Link to="/desserts">Desserts</Link></li>
          <li><Link to="/drinks">Drinks</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </span>
      </ul>
    </nav>
  )
}