import './Header.css'
import trollface from './img/trollface.svg'

export default function Header() {
    return(
        <header>
            <div className="logo">
                <img src={trollface} alt='trollface' className='troll-face'/>
                <h1 className='title--header'>Meme Generator</h1>
            </div>
                        
            <h2 className='subtitle--header'>React Course - Project 3</h2>
        </header>
    )
}