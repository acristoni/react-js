import Card from "./Card"
import './Carosel.css'

export default function Carosel () {
    return (
        <footer>
            <Card 
            tag='soldout'
            img='swimmer.png'
            rating='5.0'
            reviewCount='6'
            country='USA'
            title='Life Lessons with Katie Zaferes'
            price='136'
            />
            <Card 
            tag='online'
            img='wedding.png'
            rating='5.0'
            reviewCount='30'
            country='USA'
            title='Learn wedding photography design'
            price='125'
            />
            <Card 
            tag='xxx'
            img='bike.png'
            rating='4.8'
            reviewCount='2'
            country='USA'
            title='Group Mountain Biking'
            price='50'
            />
        </footer>
    )
}