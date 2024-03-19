import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import { addTodo, deleteTodo, selectTodos } from "../../redux/reducers/todoSlice";

export default function SyncTodoList() {
    const dispatch = useDispatch();
    const todos = useSelector(selectTodos);

    useEffect(() => {
        dispatch(addTodo({ id: 1, title: "Tarea 1", completed: false }));
    }, []);

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo({ id }));
    };


    return (
        <section>
            <h1>SYNC TODO LIST</h1>
            <Button text="ASYNC TODOS" path="/" />
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
