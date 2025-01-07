import { useContext, useState } from "react";
import Context from "./AppContext";

const Form = () => {
  const { dispatch } = useContext(Context);
  const [formInput, setFormInput] = useState(''); 

  const handleChange = (e) => {
    setFormInput(e.target.value.toUpperCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formInput.trim()) { 
      dispatch({ type: "ADD_TODO", payload: { id: Date.now(), title: formInput, isCompleted: false } });
      setFormInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        value={formInput}
        className="form-input"
        onChange={handleChange}
        placeholder="To Do Text"
      />
      <button className="btn" type="submit">+</button>
    </form>
  );
};

export default Form;
