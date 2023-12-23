import { createSlice } from "@reduxjs/toolkit";

const todolist = createSlice({
    name:"ToDolist",
    initialState:{
        users:[],
    },
    reducers:{
        addUser(state,action){
            state.users.push(action.payload)
            console.log("data updated",action.payload)
        },
    },
})

// export reducer for store
export default todolist.reducer

//destructring method
export const {addUser} = todolist.actions

//for useSelector method we acces state throw index reducers name "todolist" not using slice name "ToDolist"
export const selectUser = (state)=> state.todolist.users

