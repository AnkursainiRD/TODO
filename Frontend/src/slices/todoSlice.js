import { createSlice } from "@reduxjs/toolkit";

const initialState={
    loading:false,
    filterData:null,
    todos:localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")):null
}

const todoSlice=createSlice({
    name:"todo",
    initialState:initialState,
    reducers:{
        setLoading(state,action){
            state.loading=action.payload
        },
        findData(state,action){
            const id=action.payload
            console.log(id);
            state.filterData=null
            const selectData=state.todos.filter(order => order._id === id);
            console.log(selectData);
            state.filterData=selectData?selectData:null
        }
    }
})

export const {setLoading,findData}=todoSlice.actions
export default todoSlice.reducer