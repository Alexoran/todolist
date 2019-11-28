let nextTodoId = 0
export const addTodo = (id, text) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

export const deleteTodo = id => ({
    type: 'DELETE_TODO',
    id
})




