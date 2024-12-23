import '../styles/pages/_property.scss';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Dropdown from '../components/Dropdown';
import NotFound from './NotFound';

const Property = () => {
    const { id } = useParams();
    const [property, setProperty] = useState(null);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        fetch('/data.json')
            .then((response) => response.json())
            .then((data) => {
                const selectedProperty = data.find((item) => item.id === id);
                if (!selectedProperty) {
                    setNotFound(true);
                } else {
                    setProperty(selectedProperty);
                }
            })
            .catch((error) => {
                console.error('Erreur lors du chargement des données:', error);
                setNotFound(true);
            });
    }, [id]);

    if (notFound) {
        return <NotFound />;
    }

    if (!property) {
        return <div>Chargement...</div>;
    }

    return (
        <div className="property">
            <Carousel pictures={property.pictures} />

            <div className="property-details">

                <div className="property-title-location-tags">
                    <h1 className="property-title">{property.title}</h1>
                    <p className="property-location">{property.location}</p>
                    <div className="property-tags">
                        {property.tags.map((tag, index) => (
                            <span key={index} className="tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="property-host-rating">
                    <div className="property-host">
                        <p>{property.host.name}</p>
                        <img src={property.host.picture} alt={property.host.name} />
                    </div>
                    <div className="property-rating">
                        {[...Array(5)].map((_, index) => (
                            <span
                                key={index}
                                className={`star ${index < property.rating ? 'filled' : 'empty'}`}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                </div>

            </div>

            <div className="property-dropdowns">
                <div className="dropdown-container">
                    <Dropdown title="Description" content={property.description} />
                </div>
                <div className="dropdown-container">
                    <Dropdown
                        title="Équipements"
                        content={
                            <ul>
                                {property.equipments.map((equipment, index) => (
                                    <li key={index}>{equipment}</li>
                                ))}
                            </ul>
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default Property;