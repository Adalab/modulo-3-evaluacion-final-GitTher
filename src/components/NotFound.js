import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <Link to="/">Volver</Link>
            <p> La página que buscas no existe</p>
        </>
    )
}

export default NotFound