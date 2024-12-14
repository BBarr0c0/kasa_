import '../styles/components/_banner.scss';
import PropTypes from 'prop-types';

const Banner = ({ image, text }) => {
    return (
        <div className="banner">
            <img src={image} alt="Banner" className="banner-image" />
            {text && <h1 className="banner-text">{text}</h1>}
        </div>
    );
};

Banner.propTypes = {
    image: PropTypes.string,
    text: PropTypes.string,
};

export default Banner;
