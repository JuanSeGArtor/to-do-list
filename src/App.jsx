import { Routes, Route } from "react-router-dom";
import TodoList from './pages/TodoList/TodoList.jsx';
import NewTodo from './pages/NewTodo/NewTodo.jsx';
import TodoDetail from './pages/TodoDetail/TodoDetail.jsx';


export default function App() {
    return (
        <>
        <Routes>
            <Route path="/" element={<TodoList />}/>
            <Route path="/:id" element={<TodoDetail />} />
            <Route path="/new-todo" element={<NewTodo />} />
        </Routes>
        </>
    );
}