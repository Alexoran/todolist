import React from 'react'
import s from './addcomment.module.css'

const Addcomment = () => {
    return (
        <div className={s.main}>
            <div className={s.ava}></div>
            <input type="text" className={s.textfield} />
        </div>
    )
}

export default Addcomment