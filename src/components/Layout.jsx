import Header from './Header';
import Footer from './Footer';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node,
};

export default Layout;