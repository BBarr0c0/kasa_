import '../styles/pages/_home.scss';
import Banner from '../components/Banner';
import bannerHome from '../assets/banner_home.png';

const Home = () => {
    return (
        <div className="home">
            <Banner image={bannerHome} text="Chez vous, partout et ailleurs" />
            <h1>ACCUEIL</h1>
        </div>
    );
};

export default Home;