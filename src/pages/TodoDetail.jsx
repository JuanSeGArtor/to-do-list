import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from "../components/Button";
import { getTodo } from "../services/todos";

export default function TodoDetail() {
    const { id } = useParams();
    const [todo, setTodo] = useState(null);

    useEffect(() => {
        fetchTodo();
    }, []);

    const fetchTodo = async () => {
        try {
            const todoData = await getTodo(id);
            setTodo(todoData);
        } catch (error) {
            console.log(error);
            setTodo(null);
        }
    };

    if (!todo) {
        return (
            <section>
                <h1>Loading...</h1>
            </section>
        );
    }

    return (
        <section>
            <h1>TODO Detail</h1>
            <main>
                <h2>Title: {todo.title}</h2>
                <p>Description: {todo.description}</p>
                <p>Creation Date: {todo.creationDate}</p>
            </main>
            <Button text="Back to List" path="/" />
        </section>
    )
}