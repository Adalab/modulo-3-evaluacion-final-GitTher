import { Link } from 'react-router-dom';
import '../styles/components/NotFound.scss'

const NotFound = () => {
    return (
        <>
            <Link className='back' to="/">Volver</Link>
            <p className='alert' > La página que buscas no existe</p>
        </>
    )
}

export default NotFound