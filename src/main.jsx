import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './main.scss';
import TodoList from './pages/TodoList.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoList />,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
