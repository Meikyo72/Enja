import { Link } from "react-router-dom";

function Navbar() {

return (

<nav className="nav-menu">
    <ul>
        <li><Link to="/">Hem</Link></li>
        <li><Link to="/about">Om Oss</Link></li>
        <li><Link to="/team">Våra Konsulter</Link></li>
        <li><Link to="/services">Tjänster</Link></li>
        <li><Link to="/contact">Kontakt</Link></li>
    </ul>
    
</nav>


);

}

export default Navbar;