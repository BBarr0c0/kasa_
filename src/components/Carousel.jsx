import { useState } from 'react';
import '../styles/components/_carousel.scss';
import PropTypes from 'prop-types';

const Carousel = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="carousel">
            {pictures.length > 1 && (
                <>
                    <button className="arrow previous" onClick={handlePrevious}>
                    &#10094;
                    </button>
                    <button className="arrow next" onClick={handleNext}>
                    &#10095;
                    </button>
                </>
            )}
            <img
                src={pictures[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="carousel-image"
            />
            {pictures.length > 1 && (
                <div className="indicator">
                    {currentIndex + 1} / {pictures.length}
                </div>
            )}
        </div>
    );
};

Carousel.propTypes = {
    pictures: PropTypes.string,
};

export default Carousel;