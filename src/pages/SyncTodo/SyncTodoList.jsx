import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import { addTodo, deleteTodo, selectTodos } from "../../redux/reducers/todoSlice";

export default function SyncTodoList() {
    const dispatch = useDispatch();
    const todos = useSelector(selectTodos);
    const [newTodoTitle, setNewTodoTitle] = useState("");

    useEffect(() => {
        dispatch(addTodo({ id: 1, title: "Tarea 1", completed: false }));
    }, []);

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo({ id }));
    };

    const handleCreateTodo = () => {
        if (!newTodoTitle.trim()) {
            return;
        }
        const newTodo = {
            id: Date.now(),
            title: newTodoTitle,
            completed: false,
        };
        dispatch(addTodo(newTodo)); 
        setNewTodoTitle("");
    };

    return (
        <section>
            <h1>SYNC TODO LIST</h1>
            <Button text="ASYNC TODOS" path="/" />
            <div className="new-todo" style={{display: 'flex', gap: '20px'}}>
                <input
                    type="text"
                    placeholder="Enter todo title"
                    value={newTodoTitle}
                    onChange={(e) => setNewTodoTitle(e.target.value)} 
                />
                <button onClick={handleCreateTodo}>Create Todo</button>
            </div>
            <main>
                {todos.map(todo => (
                    <div className="todos-list" key={todo.id}>
                        <h2>{todo.title}</h2>
                        <button onClick={() => handleDeleteTodo(todo.id)}>X</button>
                    </div>
                ))}
            </main>
            {/* <Button text="New To-do" path="/new-sync-todo"/> */}
        </section>
    );
}
