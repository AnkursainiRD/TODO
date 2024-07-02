import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { deleteTodo } from '../services/operations/todoApi';

function Card({_id,title,description,completed,dueDate}) {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    function handleDeleteTodo(id){
        console.log(id);
        deleteTodo(dispatch,navigate,id)
    }
  return (

        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
            <div>
                <h1>{dueDate&& new Date(dueDate).toDateString('en-GB')}</h1>
            </div>
           <div className='flex justify-between gap-10 items-center'>
           <div class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {completed?'Completed' :'Pending'}
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </div>
            
            <div className=' px-5 py-1 rounded-md'>
                <Link to={`/updateTodo/${_id}`}>Edit</Link>
                <span className='font-semibold p-1'>/</span>
                <button className='text-white py-1 bg-red-500 px-2 rounded-lg' onClick={()=>handleDeleteTodo(_id)}>Delete</button>
            </div>
           </div>
        </div>

  )
}

export default Card