import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './main.scss';
import TodoList from './pages/TodoList.jsx';
import NewTodo from './pages/NewTodo.jsx';
import TodoDetail from './pages/TodoDetail.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoList />,
    children: [
      {
        path: "/to-do-:id",
        element: <TodoDetail />,
      },
    ]
  },
  {
    path: "/new-todo",
    element: <NewTodo />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
