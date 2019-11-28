import React from 'react'
import s from './navbar.module.css'

const Navbar = () => {
    return (
        <div className={s.nav}>
            <div className={s.text}>DAIRY APP</div>
            <div className={s.comment}>Coment with no sense</div>
        </div>
    )
}


export default Navbar