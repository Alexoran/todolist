    import React from 'react'
    import s from './todolist.module.css'

    const Todolist = ({ onClick, text }) => {
        return (
            <div className={s.list}>
                <div className={s.fulltext}><span className={s.text}>{text}</span><span className={s.square}>420</span></div>
                <button type="submit" className={s.delete}>Delete</button>

            </div>
        )

    };



    export default Todolist