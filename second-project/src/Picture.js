import React from 'react'
import Foto from './images/eu.jpg'
import './Picture.css'

export default function Picture() {
    return (
        <header>
            <img className='picture' src={Foto} alt='mypicture'/>
            <h1 className='name'>A. Cristoni</h1>
            <h2 className='title'>Full Stack Developer</h2>
            <h3 className='site'>acrestoni.website</h3>
        </header>
    )
}