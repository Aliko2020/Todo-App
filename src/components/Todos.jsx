import { useContext, useState } from "react";
import Context from "./AppContext";

const Todos = () => {
  const { state, dispatch } = useContext(Context);
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 3;

  const handleDelete = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const handleToggle = (id) => {
    dispatch({ type: "TOGGLE_ISCOMPLETED", payload: id });
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  
  const filteredTodos = state.todos
    .filter((todo) => !todo.isCompleted)
    .reverse();

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = filteredTodos.slice(indexOfFirstTodo, indexOfLastTodo);
  const totalPages = Math.ceil(filteredTodos.length / todosPerPage);

  return (
    <div className="todos">
      {filteredTodos.length === 0 ? (
        <p className="empty-todo">
          Your To-Do list is empty, like a treasure chest waiting to be filled with adventure!
        </p>
      ) : (
        <>
          {currentTodos.map((todo) => (
            <div key={todo.id} className="todo">
              <div className="input-todo">
                <input
                  type="checkbox"
                  checked={todo.isCompleted}
                  onChange={() => handleToggle(todo.id)}
                />
                <span>{todo.title}</span>
              </div>
              <button className="btn-delete" onClick={() => handleDelete(todo.id)}>
                Delete
              </button>
            </div>
          ))}
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`page-btn ${index + 1 === currentPage ? "active" : ""}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Todos;
