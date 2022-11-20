import { NavLink } from "react-router-dom";

function Navbar() {
    let activeClassName = 'activeStyle';

return (

<nav className="nav-menu">
    <ul>
        <li><NavLink to="/" className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }>Hem</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }>Om EnJa</NavLink></li>
        <li><NavLink to="/team" className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }>Teamet</NavLink></li>
        <li><NavLink to="/services" className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }>Tjänster</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }>Kontakt</NavLink></li>
    </ul>
    
</nav>


);

}

export default Navbar;