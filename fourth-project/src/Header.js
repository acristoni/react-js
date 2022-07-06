import './Header.css'
import mundo from './images/mundo.svg'



export default function Header() {
    return (
        <nav className='header'>
            <img src={mundo} alt="mundo" className='logoMundo' />
            <h1 className='title--navbar'>my travel journal.</h1>
        </nav>
    )
}