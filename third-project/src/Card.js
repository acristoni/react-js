import './Card.css'
import pinkstart from './imagens/pinkstart.png' 

export default function Card (props) {
    const photo = require('./imagens/' + props.img)

    return (
        <div className="card">
            <div className='tag'>
                <p>
                    SOLD OUT
                </p>    
            </div>
            <img src={photo} alt='card swimmer'/>
            <section>
                <img src={pinkstart} alt='star'/>
                <span className='grade'>{props.rating}</span>
                <span className='visits'>({props.reviewCount}) • {props.country}</span>
            </section>
            <p className='nameActive'>{props.title}</p>
            <p className='price'><strong>From ${props.price} /</strong> person</p>
        </div>
    )
}