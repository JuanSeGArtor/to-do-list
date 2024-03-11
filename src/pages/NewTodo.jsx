import { useState } from "react";
import Button from "../components/Button";


export default function NewTodo() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [creationDate, setCreationDate] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleCreationDateChange = (e) => {
        setCreationDate(e.target.value);
    };


    return (
        <section>
            <h1>NEW TODO</h1>
            <main>
                <label htmlFor="">TODO title</label>
                <input type="text" placeholder="TODO title" value={title} onChange={handleTitleChange} />
                <label htmlFor="">TODO description</label>
                <textarea className="description" type="text" placeholder="Description" value={description} onChange={handleDescriptionChange} />
                <label htmlFor="">Creation Time</label>
                <input type="date" value={creationDate} onChange={handleCreationDateChange} />
            </main>
            <Button text="Save" path="/"/>
        </section>
    )
}
