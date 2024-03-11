import { useEffect, useState } from "react";
import Button from "../components/Button";
import { getTodos } from "../services/todos";
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


    return (
        <section>
            <h1>TODO LIST</h1>
            <main>
                {todos.map(todo => (
                    <div key={todo.id}>
                        <h2>{todo.title}</h2>
                        <p>{todo.description}</p>
                        <p>{todo.creationDate}</p>
                        <Link to={`/todo-detail/${todo.id}`}>Ver detalle</Link>
                    </div>
                ))}
            </main>
            <Button text="New To-do" path="/new-todo"/>
        </section>
    )
}
