import './Card.css'
import pinkstart from './imagens/pinkstart.png' 

export default function Card (props) {
    const photo = require('./imagens/' + props.img)

    let tag = 'none'
    let tagContent = ''

    switch(props.tag) {
        case 'soldout':
            tag = 'tag'
            tagContent = 'SOLD OUT'
            break;
        case 'online':
            tag = 'tag'
            tagContent = 'ONLINE'
            break;
        default:
            tag = 'none'
            tagContent = ''
    }

    return (
        <div className="card">
            <div className='relative'>
                <div className={tag}>
                    <p className='tagContent'>{tagContent}</p>
                </div>
                <img className='foto' src={photo} alt='card swimmer'/>
            </div>
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