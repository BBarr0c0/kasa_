import '../styles/pages/_notfound.scss';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notFound">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n&apos;existe pas</p>
            <Link to="/">Retourner sur la page d&apos;accueil</Link>
        </div>
    );
};

export default NotFound;