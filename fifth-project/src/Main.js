import './Main.css'
import imgmeme from './img/memeimg.png'

export default function Main() {
    return(
        <main>
            <section className='form'>
                <input type='text' placeholder='Shut up' className='input'/>
                <input type='text' placeholder='Shut upand take my money' className='input'/>
            </section>
            <button className='button'><span className='text-button'>Get a new meme image  🖼</span></button>
            <div className='meme'>
                <img src={imgmeme} alt='meme' className='imgmeme'/>
                <h1 className='text-meme-top'>SHUT UP</h1>
                <h1 className='text-meme-botton'>AND TAKE MY MONEY</h1>
            </div>
            

            
        </main>
    )
}