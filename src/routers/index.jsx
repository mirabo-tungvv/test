import { createBrowserRouter } from "react-router-dom";
import PersonPage from "../pages/PersonPage";
import HomePage from "../pages/HomePage";
import TodoPage from "../pages/TodoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        index: true,
        element: <h1>Home Page</h1>,
      },
      {
        path: "/about",
        element: <h1>About</h1>,
      },
      {
        path: "/person",
        element: <PersonPage />,
      },
      {
        path: "/todo-list",
        element: <TodoPage />,
      },
    ],
  },
]);

export default router;
