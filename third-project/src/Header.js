import './Header.css'
import logo from './imagens/logo.svg'
import mainImage from './imagens/main-image.png'

export default function Header () {
    return (
        <header>
            <div className='boxLogo'>
                <img className='logo' src={logo} alt="logo"/>
            </div>
            <div className="line"></div>
            <img className='main' src={mainImage} alt="main"/>
            <section className='texts'>
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </section>
            
    </header>
    )
}