import '../styles/components/_card.scss';
import PropTypes from 'prop-types';

const Card = ({ title, cover }) => {
    return (
        <div className="card">
            <img src={cover} alt={title} className="card-image" />
            <div className="card-text">{title}</div>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
};

export default Card;