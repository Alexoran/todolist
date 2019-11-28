import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from "../../actions";
import s from './todo.module.css'
import Todolist from "./Todolist/Todolist";

const Todo = ({ onSubmit }) => {
    let input

    return(
        <div className={s.todoList}>
            <div className={s.items}>Items</div>
            <form className={s.add} onSubmit={e => {onSubmit(input.value)}}>
               <input  otype="text" className={s.textfield} id="inputText" placeholder="add todo here" ref={node => {input = node}}/>
                <button type="submit" className={s.button} onClick={() =>{ this.props.addTodo(this.state.todotext); this.setState({ todotext: '' }) }}>Add new</button>
            </form>

        </div>
    )

};


export default connect(state => ({
    todos: state.todos
}), {addTodo})(Todo)