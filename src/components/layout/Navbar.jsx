import { Link } from "react-router-dom";

export default function Navbar() {
  return(
    <nav>
      <span>Tapioca</span>
      <ul>
        <li><Link to="/dishes">Dishes</Link></li>
        <li><Link to="/desserts">Desserts</Link></li>
        <li><Link to="/drinks">Drinks</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}