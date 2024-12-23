import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/_dropdown.scss';

const Dropdown = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <div className="dropdown-header" onClick={toggleDropdown}>
                <h3>{title}</h3>
                <span className={`arrow ${isOpen ? 'down' : 'up'}`}></span>
            </div>
            {isOpen && <div className="dropdown-content">{content}</div>}
        </div>
    );
};

Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
};

export default Dropdown;