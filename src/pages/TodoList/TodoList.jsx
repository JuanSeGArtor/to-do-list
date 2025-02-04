import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useGetTodosQuery, useRemoveTodoMutation } from "../../services/todos";
import DeleteButton from "../../components/DeleteButton";

export default function TodoList() {
    const { data: todos, isLoading } = useGetTodosQuery();
    const [removeTodo] = useRemoveTodoMutation();

    const handleDeleteTodo = async (id) => {
        try {
            await removeTodo(id).unwrap();
        } catch (error) {
            console.log("Error deleting todo:", error);
        }
    };

    return (
        <section>
            <h1>ASYNC TODO LIST</h1>
            <Button text="SYNC TODOS" path="/sync-todo" />
            <main>
                {isLoading ? (
                    <h2>Loading...</h2>
                ) : (
                    todos.map(todo => (
                        <div className="todos-list" key={todo.id}>
                            <h2>{todo.title}</h2>
                            <Link className="link" to={`/${todo.id}`}>Ver detalle</Link>
                            <DeleteButton id={todo.id} onDelete={handleDeleteTodo} />
                        </div>
                    ))
                )}
            </main>
            <Button text="New To-do" path="/new-todo" />
        </section>
    )
}
