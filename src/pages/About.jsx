import '../styles/pages/_about.scss';
import Banner from '../components/Banner';
import bannerAbout from '../assets/banner_about.png';


const About = () => {
    return (
        <main className="about">
            <Banner image={bannerAbout} />
            <h1>A PROPOS</h1>
        </main>
    );
};

export default About;