const TODOS = [
    {
        id: 1,
        text: 'Bodya loh'
    },
    {
        id: 2,
        text: 'Bodya loh dva raza'
    }
]

const todos = (state = TODOS, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text
                }
            ];
        default:
            return state
    }
}

export default todos