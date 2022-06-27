import './Buttons.css'
import linkedlnicon from './images/linkeln-icon.svg'
import emailicon from './images/email-icon.svg'

export default function Buttons() {
    return (
        <section>
            <button className="email">
                <img src={emailicon} alt='emailicon'></img>
                <span>Email</span>
            </button>
            <button className="linkedln">
                <img src={linkedlnicon} alt='linkedlnicon'></img>
                <span>Linkedln</span>
            </button>
        </section>
)}