import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import { createTodo, updateTodo } from '../services/operations/todoApi';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'

function FormTemplate({id,heading, completed=null,description,title,dueDate}) {
    // console.log(completed,description,title,dueDate);
    const {register,handleSubmit,formState:{errors}}=useForm()
    const [toggle,setToggle]=useState(completed)
    const dispatch=useDispatch()
    const navigate=useNavigate()


     function sendTodoDetils(data){
        if(heading=="Create Todo"){ 
             createTodo(dispatch,navigate,data)}
        else{
            console.log(data);
            updateTodo(dispatch,navigate,data,id)
        }
    }
  return (
    <div className='mt-[10%] '>
        <form onSubmit={handleSubmit(sendTodoDetils)} class="max-w-sm mx-auto">
            <h1 className='text-3xl font-bold mb-9'>{heading}</h1>
        <div class="mb-5">
            <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Todo Title</label>
            <input type="text" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Todo title here" {...register('title', { required: true })} defaultValue={title&&title} />
        </div>
        {errors.title && (
                            <span className=' text-[12px] text-red-500'>
                                Please Enter Title
                            </span>
                        )}
        <div class="mb-5">
            <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
            <textarea rows={4} type="text" id="description" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter todo description' {...register('description', { required: true })} defaultValue={description&&description}/>
        </div>
        {errors.description && (
                            <span className='text-[12px] text-red-500'>
                                Please Enter Description
                            </span>
                        )}
        <div class="mb-5">
            <label for="dueDate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Due Date</label>
            <input type="date" id="dueDate" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter todo description' {...register('dueDate', { required: true })} defaultValue={dueDate&&new Date(dueDate).toLocaleDateString('en-US')}/>
        </div>
        {errors.dueDate && (
                            <span className='text-[12px] text-red-500'>
                                Please Enter Due Date
                            </span>
                        )}
        
        {
            completed!==null&&<div>  
                <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" value={true} class="sr-only peer" onClick={()=>setToggle(!toggle)}  defaultChecked={completed} {...register('completed')}/>
                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Completed</span>
                </label>
            </div>
        }
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    </div>
  )
}

export default FormTemplate;