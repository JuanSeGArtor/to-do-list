import { useState } from "react";
import './newTodo.scss';
import Button from "../../components/Button";
import { useCreateTodoMutation } from "../../services/todos";


export default function NewTodo() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [creationDate, setCreationDate] = useState('');

    const [createTodo, { isLoading }] = useCreateTodoMutation();

    const handleSave = async () => {
        if (!title || !description || !creationDate) {
            console.log("Campo(s) no llenados");
            return;
        }

        const todo = {
            title: title,
            description: description,
            creationDate: creationDate,
        };

        try {
            await createTodo(todo).unwrap();
            console.log('New todo created');
            alert('TODO created');

            setTitle('')
            setDescription('')
            setCreationDate('')
        } catch (error) {
            console.log('Error creating new todo:', error);
        }
    };

    return (
        <section>
            <h1>NEW TODO</h1>
            <main>
                <label htmlFor="">TODO Title</label>
                <input required type="text" placeholder="TODO title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="">TODO Description</label>
                <textarea required className="description" type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <label htmlFor="">TODO Creation Time</label>
                <input required type="date" value={creationDate} onChange={(e) => setCreationDate(e.target.value)} />
            </main>
            <div className="buttons">
                <button className="button-save" onClick={handleSave} disabled={isLoading}>
                    {isLoading ? "Saving..." : "Save"}
                </button>
                <Button text="TODOs List" path="/" />
            </div>
        </section>
    )
}
