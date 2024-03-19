import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import { addTodo, deleteTodo, resetTodos, selectTodos, toggleTodoStatus } from "../../redux/reducers/todoSlice";
import { nanoid } from "@reduxjs/toolkit";

export default function SyncTodoList() {
    const dispatch = useDispatch();
    const todos = useSelector(selectTodos);
    const [newTodoTitle, setNewTodoTitle] = useState("");


    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo({ id }));
    };

    const handleCreateTodo = () => {
        if (!newTodoTitle.trim()) {
            return;
        }
        const newTodo = {
            id: nanoid(),
            title: newTodoTitle,
            isCompleted: false,
        };
        dispatch(addTodo(newTodo)); 
        setNewTodoTitle("");
    };

    const handleToggleTodoStatus = (id) => {
        dispatch(toggleTodoStatus(id));
    }
    
    const handleResetTodos = () => {
        dispatch(resetTodos());
    }


    return (
        <section>
            <h1>SYNC TODO LIST</h1>
            <Button text="ASYNC TODOS" path="/" />
            <button onClick={handleResetTodos}>Reset All</button>
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
                    <div key={todo.id} className={`todos-list ${todo.isCompleted ? 'completed' : 'incomplete'}`}>
                        <h2>{todo.title}</h2>
                        <button className="status" onClick={() => handleToggleTodoStatus(todo.id)}>
                            {todo.isCompleted ? "Completed" : "Incomplete"}
                        </button>
                        <button onClick={() => handleDeleteTodo(todo.id)}>X</button>
                    </div>
                ))}
            </main>
        </section>
    );
}
