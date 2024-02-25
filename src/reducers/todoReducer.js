import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [
    {
      id: 1,
      name: "quét nhà",
      isComplete: false,
    },
    {
      id: 2,
      name: "rửa bát",
      isComplete: false,
    },
  ],
  name: "Tien Anh",
  age: 20,
};

export const todoSlice = createSlice({
  name: "todo-list",
  initialState,
  reducers: {
    addTodo(state, action) {
      // state: là state hiện tại
      // action chứa thông tin gửi lên từ UI
      state.todoList.push(action.payload);
    },
    deleteTodo(state, action) {
      const newTodoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
      state.todoList = newTodoList;
    },
    changeStatusTodo(state, action) {
      const idUpdate = action.payload;

      const newTodoList = state.todoList.map((todo) => {
        if (todo.id === idUpdate) {
          todo.isComplete = !todo.isComplete;
          return todo;
        }
        return todo;
      });
      state.todoList = newTodoList;
    },
  },
});

// export các actions
export const { addTodo, deleteTodo, changeStatusTodo } = todoSlice.actions;

// export hàm get value trong reducer
export function getTodoState(state) {
  return state.todoReducer;
}

const todoReducer = todoSlice.reducer;

export default todoReducer;
