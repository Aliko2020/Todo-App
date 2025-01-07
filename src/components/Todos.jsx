import { useContext } from "react";
import Context from "./AppContent";


const Todos = () => {

 const {state, dispatch} = useContext(Context)

 const handleDelete = (index)=>{
    dispatch({type: "DELETE", index})
 }
  
  return (
    <div className="todos">
      {state.todos.length === 0 ? (
        <p>You currently do not have a Todo</p>
      ) : (
        state.todos.map((todo, index) => (
          <div key={index} className="todo">
            <div className="input-todo">
              <input type="checkbox" name="" />
              <span>{todo.name}</span>
            </div>
            <button className="btn-delete" onClick={()=> handleDelete(index)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Todos;
