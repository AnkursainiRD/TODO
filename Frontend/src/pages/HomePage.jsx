import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../components/Spinner'
import { getAllTodos } from '../services/operations/todoApi'
import Card from '../components/Card'

export default function HomePage() {
    const {loading,todos}=useSelector((state)=>state.todo)
    const [todo,setTodos]=useState(null)
    const dispatch=useDispatch()
    useEffect(()=>{
        console.log("it is working");
        getAllTodos(dispatch)
    },[])
    
  return (
    <div className='flex items-center justify-center '>
       {loading?(<Spinner/>):(
       <div className='w-6/12 flex flex-wrap gap-7 flex-row'>
            { todos&&todos.map((vlaues,index)=>{
                 return <Card {...vlaues}/>
            })}
       </div>
       )}
    </div>
  )
}
