import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from "../../components/Button";
import { useGetTodoQuery } from '../../services/todos';


export default function TodoDetail() {
    const { id } = useParams();
    const { data: todo, error, isLoading } = useGetTodoQuery(id);

    useEffect(() => {
        if (error) {
            console.log("Error fetching todo:", error);
        }
    }, [error]);

    return (
        <section>
            <h1>TODO Detail</h1>
            {isLoading ? (
                <h2>Loading...</h2>
            ) : (
                <main>
                    <h2>Title: {todo.title}</h2>
                    <p>Description: {todo.description}</p>
                    <p>Creation Date: {todo.creationDate}</p>
                </main>
            )}
            <Button text="Back to List" path="/" />
        </section>
    )
}
