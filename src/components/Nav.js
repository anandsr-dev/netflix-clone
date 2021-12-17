import React, { useState, useEffect } from 'react'
import './Nav.css'

function Nav({ logos }) {

    const [show, setShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 120)
            setShow(true)
            else
            setShow(false)
        })

        return () => window.removeEventListener('scroll')

    }, [])

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <img className='nav__logo' src={logos.netflix} alt="Netflix Logo" />
            <img className='nav__avatar' src={logos.avatar} alt="Avatar" />
        </div>
    )
}

export default Nav
