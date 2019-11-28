import React from 'react'
import s from './commentslist.module.css'
import Addcomment from "../Addcomment/Addcomment";

const Commentslist = () => {
    return (
        <div className={s.items}>
            <div className={s.ava}></div>
            <span className={s.comment}>Иногда центрировать нужно не текст, а блок в целом. Или, по-другому говоря: мы хотим, чтобы правое и левое поля были одинаковыми. Для этого нужно установить поля на 'auto'.</span>

        </div>
    )
}

export default Commentslist