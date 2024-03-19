import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    todos: [
        { id: 1, title: "Tarea 1", isCompleted: false },
        { id: 2, title: "Tarea 2", isCompleted: false },
    ],
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.todos.push(action.payload);
        },
        toggleTodoStatus(state, action) {
            const id = action.payload;
            const todoId = state.todos.findIndex(todo => todo.id === id);
            const updatedTodo = { ...state.todos[todoId], isCompleted: !state.todos[todoId].isCompleted };
            state.todos[todoId] = updatedTodo;
        },
        deleteTodo(state, action) {
            const { id } = action.payload;
            state.todos = state.todos.filter(todo => todo.id !== id);
        },
        resetTodos(state) {
            state.todos = [];
        },
    },
});


export const { addTodo, toggleTodoStatus, deleteTodo, resetTodos } = todoSlice.actions;

export const selectTodos = (state) => state.todos.todos;

export default todoSlice.reducer;
