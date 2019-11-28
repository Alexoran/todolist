import React from 'react'
import s from './comments.module.css'
import Commentslist from "./Commentslist/Commentslist";
import Addcomment from "./Addcomment/Addcomment";

const Comments = () => {
    return(
        <div className={s.comments}>
            <span className={s.title}>Comments</span>
            <Commentslist/>
            <Addcomment/>
        </div>
    )
}

export default Comments