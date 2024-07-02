import React, {  useState } from 'react'
import FormTemplate from '../components/FormTemplate'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { findData } from '../slices/todoSlice'

function UpdateTodoPage() {
  const {id}=useParams()
  const dispatch=useDispatch()
  const {filterData}=useSelector((state)=>state.todo)

  useState(()=>{
    dispatch(findData(id))
  },[])
  console.log(filterData[0]);
  return (
    <div>
        <FormTemplate heading="Update Todo" id={id} title={filterData[0].title} description={filterData[0]?.description} completed={filterData[0]?.completed} dueDate={filterData[0]?.dueDate} />
    </div>
  ) 
}

export default UpdateTodoPage