export const initialState = {
    todos: [{
        id: 1,
        title: "Learn React For 3 Hours",
        isCompleted: false
    },
    {
        id: 2,
        title: "Learn SQL For 3 Hours",
        isCompleted: false
    }]
};

export const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, payload]
            }
        case "TOGGLE_ISCOMPLETED":
            return{
                ...state,
                todos: state.todos.map(todo => todo.id === payload ? {...todo, isCompleted: !todo.isCompleted} : todo)
            }
        case "DELETE":
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== payload)
            }
        default:
            throw new Error("No matched dispatch")
    }
};
