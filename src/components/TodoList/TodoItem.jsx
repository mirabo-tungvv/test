/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { changeStatusTodo, deleteTodo } from "../../reducers/todoReducer";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleChangeStatusTodo = () => {
    dispatch(changeStatusTodo(todo.id));
  };

  return (
    <li>
      <span style={{ textDecoration: todo.isComplete ? "line-through" : "" }}>
        {todo.name}
      </span>
      <button onClick={handleChangeStatusTodo}>
        {todo.isComplete ? "reset" : "done"}
      </button>
      <button onClick={handleDeleteTodo}>delete</button>
    </li>
  );
};

export default TodoItem;
