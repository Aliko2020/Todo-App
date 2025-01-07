export const initialState = {
    todos: [{
        name: "Learn React 3 hours",
        isComplete: false,
      },
      {
        name: "Learn MongoDb 4 hours",
        isComplete: false,
      },
      {
        name: "Learn SQL 6 hours",
        isComplete: false,
      }],
    completed: []
}

export const reducer = (state,action)=>{
    const {type, payload} = action;

    switch (type) {
        case "ADD_TODO":
            return{
                ...state,
                todos: state.todos.push(payload)
            }
        case 'DELETE': 
            return { 
                ...state, todos: state.todos.filter((_, index) => index !== action.index) 
            };
        default:
            break;
    }
}