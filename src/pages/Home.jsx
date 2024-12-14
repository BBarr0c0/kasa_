import '../styles/pages/_home.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import bannerHome from '../assets/banner_home.png';
import Card from '../components/Card';

const Home = () => {
    const [data, setData] = useState([]);
    
        useEffect(() => {
            fetch('/data.json')
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Erreur lors du chargement des données.');
                    }
                    return response.json();
                })
                .then((data) => {
                    setData(data);
                })
                .catch((error) => {
                    console.error('Erreur:', error);
                });
        }, []);

    return (
        <div className="home">
            <Banner image={bannerHome} text="Chez vous, partout et ailleurs" />
            <div className="properties-grid">
                {data.map((property) => (
                    <Link to={`/property/${property.id}`} key={property.id}>
                        <Card key={property.id} title={property.title} cover={property.cover} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;