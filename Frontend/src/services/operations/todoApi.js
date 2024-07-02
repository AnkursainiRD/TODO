import { setLoading } from "../../slices/todoSlice";
import { apiConnector } from "../apiConnector";
import { todoEndPoints } from "../Apis";
import {toast} from "react-hot-toast"

export async function getAllTodos(dispatch){

        const toastId=toast.loading("Loading...")
        dispatch(setLoading(true))
        try {
            const res=await apiConnector("GET",todoEndPoints.GET_ALL_TODOS)
            if(!res.status==200){
                throw new Error(res.data.message)
             }
            toast.success("Data fetched")
            localStorage.setItem("todos",JSON.stringify(res?.data?.data))
        } catch (error) {
            console.log(error);
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
}

export async function createTodo(dispatch,navigate,{title,description,dueDate}){
   console.log({title,description,dueDate});
    const toastId=toast.loading("Loading...")
         dispatch(setLoading(true))
        try {
            const res=await apiConnector("POST",todoEndPoints.CREATE_TODO,{title,description,dueDate},{'Content-Type': 'application/json'})
            if(!res.status==200){
                throw new Error(res.data.message)
             }
            toast.success("Data fetched")
            // localStorage.setItem("todos",JSON.stringify(res?.data?.data))
        } catch (error) {
            console.log(error);
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
        navigate('/')
}

export async function updateTodo(dispatch,navigate,{title,description,completed,dueDate}){
    console.log("working is here too");

    const toastId=toast.loading("Loading...")
        dispatch(setLoading(true))
        try {
            const res=await apiConnector("PATCH",todoEndPoints.UPDATE_TODO,{title,description,completed,dueDate},{'Content-Type': 'application/json'})
            if(!res.status==200){
                throw new Error(res.data.message)
             }
            toast.success("Data fetched")
            // localStorage.setItem("todos",JSON.stringify(res?.data?.data))
        } catch (error) {
            console.log(error);
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)   
        navigate('/')

}