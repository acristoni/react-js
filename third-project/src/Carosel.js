import Card from "./Card"
import './Carosel.css'
import data from "./data"


export default function Carosel () {
    var cards = data.map((card) => 
            <Card 
                id={card.id}
                card={card}
            />
    )

    return (
        <footer>
            {cards}
        </footer>
    )
}