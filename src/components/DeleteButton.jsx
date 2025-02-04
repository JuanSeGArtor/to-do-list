import React from 'react';

export default function DeleteButton({ id, onDelete }) {
    const handleDelete = async () => {
        try {
            await onDelete(id);
        } catch (error) {
            console.log("Error deleting todo:", error);
        }
    };

    return <button onClick={handleDelete}>X</button>;
}
