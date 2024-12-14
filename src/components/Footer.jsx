import '../styles/components/_footer.scss';
import logoFooter from '../assets/logo_footer.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <img src={logoFooter} alt="Kasa Logo Footer" className="footer-logo" />
            <p>© 2024 Kasa. All rights reserved.</p>
        </footer>
    );
};

export default Footer;