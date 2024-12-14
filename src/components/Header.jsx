import '../styles/components/_header.scss';
import { Link, NavLink } from 'react-router-dom';
import logoHeader from '../assets/logo_header.svg';

const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                <img src={logoHeader} alt="Kasa Logo" className="header-logo" />
            </Link>
            <nav>
                <ul>
                    <li>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/about" 
                            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                        >
                            À Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;