import logo from '../react-logo.png'
import '../index.css'

export default function Headers() {
    return (
        <header>
            <img src={logo} alt='logo react' className="logo"/>
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </header>
    )
}