import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

//Action    USING ASYNC Thunk
export const fetchTodos = createAsyncThunk("fetchTodods",async ()=>{
    try {
        const  response = await axios.get("https://fakestoreapi.com/products")

        return response
    }catch(error){
            console.log(error)
    }
})


const  todoSlice = createSlice({
    name:'todo',
    initialState:{
        isLoading:false,
        data:null,
        isError:false,
    },
    extraReducers:(builder)=>{           //hear when we make api request our rques has 3 states so wedefine it hear
        builder.addCase(fetchTodos.pending,(state,action)=>{
                state.isLoading = true;
        });
        builder.addCase(fetchTodos.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchTodos.rejected,(state,action)=>{
            console.log("Error",action.payload)
            state.isError = true;
        });
    },
})

export default todoSlice.reducer