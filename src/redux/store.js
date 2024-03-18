import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import todoReducer from './reducers/todoSlice';
import { todosApi } from '../services/todos';

const store = configureStore({
    reducer: {
        todos: todoReducer,
        [todosApi.reducerPath]: todosApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todosApi.middleware),
});

setupListeners(store.dispatch);

export default store;
