import { useEffect } from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useGetTodosQuery, useRemoveTodoMutation } from "../../services/todos";

export default function TodoList() {
    const { data: todos, error, isLoading } = useGetTodosQuery();

    const [removeTodo] = useRemoveTodoMutation();

    useEffect(() => {
        if (error) {
            console.log("Error fetching todos:", error);
        }
    }, [error]);

    const handleDeleteTodo = async (id) => {
        try {
            await removeTodo(id).unwrap();
        } catch (error) {
            console.log("Error deleting todo:", error);
        }
    };

    return (
        <section>
            <h1>TODO LIST</h1>
            <main>
                {isLoading ? (
                    <h2>Loading...</h2>
                ) : (
                    todos.map(todo => (
                        <div className="todos-list" key={todo.id}>
                            <h2>{todo.title}</h2>
                            <Link className="link" to={`/${todo.id}`}>Ver detalle</Link>
                            <button onClick={() => handleDeleteTodo(todo.id)}>X</button>
                        </div>
                    ))
                )}
            </main>
            <Button text="New To-do" path="/new-todo" />
        </section>
    )
}
