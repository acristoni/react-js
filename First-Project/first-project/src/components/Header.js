import logo from '../react-logo.png'
import '../index.css'

export default function Headers() {
    return (
        <header>
            <section className='logoANDtitle'>
                <img src={logo} alt='logo react' className="logo"/>
                <h3 className='logoTitle'>ReactFacts</h3>
            </section>
            
            <h4 className='navbar-title'>React Course - Project 1</h4>
        </header>
    )
}