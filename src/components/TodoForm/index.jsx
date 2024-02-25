import { useDispatch } from "react-redux";
import "./style.css";
import { addTodo } from "../../reducers/todoReducer";
import { useState } from "react";

const TodoForm = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const handleAddTodo = () => {
    const newTodo = {
      id: Date.now(),
      name: textInput,
      isComplete: false,
    };
    dispatch(addTodo(newTodo));
    setTextInput("");
  };

  return (
    <div className="todo-form">
      <div className="text-field">
        <label htmlFor="username3">Todo Name</label>
        <input
          value={textInput}
          autoComplete="off"
          type="text"
          id="username3"
          placeholder="Enter your todo name"
          onChange={(event) => setTextInput(event.target.value)}
        />
      </div>
      <button className="button" onClick={handleAddTodo}>
        Add todo
      </button>
    </div>
  );
};

export default TodoForm;
