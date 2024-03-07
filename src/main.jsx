import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import TodoList from './pages/Todo.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoList />,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
