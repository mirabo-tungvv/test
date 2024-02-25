import { useSelector } from "react-redux";
import { getTodoState } from "../../reducers/todoReducer";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoState = useSelector(getTodoState);
  console.log("todoList la:", todoState.todoList);

  return (
    <ul>
      {todoState.todoList.map((todo) => (
        <TodoItem key={todo} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
