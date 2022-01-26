import logo from '../images/logo.png'
import '../styles/components/Header.scss'

const Header = () => {
    return (
        <header className='header'>
            <img className='header__logo' src={logo} alt="harry-potter-logo" title="harry-potter-logo" />
            <h1 className='header__title'>Buscador de personajes</h1>
        </header>
    )
}

export default Header