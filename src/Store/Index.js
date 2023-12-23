import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './Slice/todo';
import ToDolistReducer from "./Slice/ToDolist"

const store = configureStore({
    reducer:{
        todo:todoReducer,
        todolist:ToDolistReducer,
    }
})

export default store