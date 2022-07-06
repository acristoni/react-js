import './travel.css'
import localizacao from './images/localizacao.svg'

export default function Travel(props) {
    let photo = require('./images/' + props.image)
    
    return (
        <section className="travel">
            <div className="image">
                <img src={photo} alt={props.image} className='image--image'/>
            </div>
            <div className='content'>
                <div className='main--local'>
                    <img src={localizacao} alt="localizacao" className='logo--local'/>
                    <span className='name--local'>{props.pais}</span>
                    <span className='googlelink--local'>View on Google Maps</span>
                </div>
                <h1 className='title'>{props.local}</h1>
                <span className='date'>{props.data}</span>
                <p className='paragrafo'>{props.description}</p>
            </div>
        </section>
    )
}