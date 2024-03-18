import { useEffect, useState } from "react";
import Button from "../../components/Button";
import { getTodos, removeTodo } from "../../services/todos";
import { Link } from "react-router-dom";


export default function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos();
    }, [])

    const fetchTodos = async () => {
        try {
            const todosData = await getTodos();
            setTodos(todosData);
        } catch (error) {
            console.log(error);
        }
    }

    const handleDeleteTodo = async (id) => {
        try {
            await removeTodo(id);
            setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <section>
            <h1>TODO LIST</h1>
            <main>
                {todos.map(todo => (
                    <div className="todos-list" key={todo.id}>
                        <h2>{todo.title}</h2>
                        <Link className="link" to={`/${todo.id}`}>Ver detalle</Link>
                        <button onClick={() => handleDeleteTodo(todo.id)}>X</button>
                    </div>
                ))}
            </main>
            <Button text="New To-do" path="/new-todo"/>
        </section>
    )
}
