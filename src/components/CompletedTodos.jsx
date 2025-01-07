import { useContext } from "react";
import Context from "./AppContext";

const CompletedTodos = () => {
  const { state, dispatch } = useContext(Context);

  const handleDelete = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const handleToggle = (id) => {
    dispatch({ type: "TOGGLE_ISCOMPLETED", payload: id });
  };

  return (
    <div className="completed-todos todos">
      {state.todos.filter(todo => todo.isCompleted).length === 0 ? (
        <p className="empty-todo">No completed tasks yet. Keep up the great work!</p>
      ) : (
        state.todos.filter(todo => todo.isCompleted).map((todo) => (
          <div key={todo.id} className="todo">
            <div className="input-todo">
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => handleToggle(todo.id)}
              />
              <span style={{ textDecoration: 'line-through' }}>{todo.title}</span>
            </div>
            <button className="btn-delete" onClick={() => handleDelete(todo.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default CompletedTodos;
