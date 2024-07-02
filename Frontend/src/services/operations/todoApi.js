import { setLoading } from "../../slices/todoSlice";
import { apiConnector } from "../apiConnector";
import { todoEndPoints } from "../Apis";
import {toast} from "react-hot-toast"
import axios from "axios";

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

export  function updateTodo(dispatch,navigate,data,id){

    console.log("working is here too");

    const toastId=toast.loading("Loading...")
        dispatch(setLoading(true))
        try {
             fetch(`http://localhost:4000/api/v1/updateTodo/?id=${id}`,
                {method: 'PATCH', // Specifying the request method
                    headers: {
                      'Content-Type': 'application/json', // Specifying the content type
                },
                body:JSON.stringify(data)
            }).then((res)=>console.log(res))
            .catch((err)=>console.log(err))
    //         axios
    // .patch(`https://localhost:4000/api/v1/updateTodo/${id}`,
    // {
    //     title,description,completed,dueDate 
    // },   
    // {
    //     params: { id: id },
    //     headers: {'Content-Type': 'application/json'},
    // })
    // .then(function (response) {
    //     console.log(response.data);
    // })
    // .catch(function (error) {
    //     console.error(error);
    // });
            // const res=await apiConnector("PATCH",todoEndPoints.UPDATE_TODO,{title,description,completed,dueDate},{'Content-Type': 'application/json'},{id:id})
            // if(!res.status==200){
            //     throw new Error(res.data.message),
            //  }
            // toast.success("Data fetched")
            // localStorage.setItem("todos",JSON.stringify(res?.data?.data))
        // } catch (error) {
        //     console.log(error);
        // }
      
        }
        catch(error){
            console.log(error);
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)   
        navigate('/')
}


export async function deleteTodo(dispatch,navigate,id){
    const toastId=toast.loading("Loading...")
        dispatch(setLoading(true))
    try {
        fetch(`http://localhost:4000/api/v1/deleteTodo/?id=${id}`,
            {method: 'DELETE', // Specifying the request method
                headers: {
                  'Content-Type': 'application/json', // Specifying the content type
            }
        }).then((res)=>console.log(res))
        .catch((err)=>console.log(err))
    }catch(error){
        console.log(error);
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)   
    navigate('/')
}