import './Footer.css'
import twitter from './images/twittericon.svg'
import facebook from './images/facebookicon.svg'
import instagram from './images/instagramicon.svg'
import github from './images/githubicon.svg'

export default function Footer() {
    return (
        <footer>
            <img src={twitter} alt="twitter icon" />
            <img src={facebook} alt="facebook icon" />
            <img src={instagram} alt="instagram icon" />
            <img src={github} alt="github icon" />
        </footer>
    )
}