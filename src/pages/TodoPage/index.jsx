import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";

const TodoPage = () => {
  return (
    <div>
      <h1>TODO LIST</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodoPage;
