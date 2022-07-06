import './Card.css'
import pinkstart from './imagens/pinkstart.png' 

export default function Card (props) {
    const photo = require('./imagens/' + props.card.img)

    return (
        <div className="card">
            <div className='relative'>
                {props.card.tag === 'soldout' && <div className='tag'><p className='tagContent'>SOLD OUT</p></div>}
                {props.card.tag === 'online' && <div className='tag'><p className='tagContent'>ONLINE</p></div>}
                <img className='foto' src={photo} alt='card swimmer'/>
            </div>
            <section>
                <img src={pinkstart} alt='star'/>
                <span className='grade'>{props.card.rating}</span>
                <span className='visits'>({props.card.reviewCount}) • {props.card.country}</span>
            </section>
            <p className='nameActive'>{props.card.title}</p>
            <p className='price'><strong>From ${props.card.price} /</strong> person</p>
        </div>
    )
}