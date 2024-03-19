import { Routes, Route } from "react-router-dom";
import TodoList from './pages/TodoList/TodoList.jsx';
import NewTodo from './pages/NewTodo/NewTodo.jsx';
import TodoDetail from './pages/TodoDetail/TodoDetail.jsx';
import SyncTodoList from "./pages/SyncTodo/SyncTodoList.jsx";


export default function App() {
    return (
        <>
        <Routes>
            {/* Async */}
            <Route path="/" element={<TodoList />}/>
            <Route path="/:id" element={<TodoDetail />} />
            <Route path="/new-todo" element={<NewTodo />} />
            {/* Sync */}
            <Route path="/sync-todo" element={<SyncTodoList />} />
        </Routes>
        </>
    );
}