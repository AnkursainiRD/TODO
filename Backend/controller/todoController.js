import { Todo } from "../models/todoModel.js";
import apiError from "../utils/apiErrorHandler.js";
import apiResponce from "../utils/apiResponseHandler.js";
import asyncHandler from "../utils/asyncHandler.js";

//Get all todos controller
const getAllTodos=asyncHandler(async(req,res)=>{
    const todos=await Todo.find({})
    if(!todos){
        //This is custom error handling 
        throw res.json(new apiError(404,"No Todo Founds"))
    }
    return res.status(200).json(
        //This is custom responce handling
        new apiResponce(200,todos,"Todo Fethced")
    )
})


//Create todo controller
const createTodo=asyncHandler(async(req,res)=>{
    console.log("it is workingsss");
    console.log(req.body);
    const {title,description,completed,dueDate}=req.body
    //Checking if all the fields are presents
    if([title,description,completed,dueDate].some((field)=>field?.trim==="")){
        throw res.json(new apiError(303,"All Fileds Are Required"))
    }
    //Creating new todo
    const newTodo=await Todo.create({title,description,completed,dueDate})
    if(!newTodo){
        throw res.json(new apiError(401,"Todo Creation Failed"))
    }
    return res.status(200).json( new apiResponce(200,newTodo,"Todo Created Successfuly"))
})


//Update todo controller
const updateTodo=asyncHandler(async(req,res)=>{
    //Fetching todo id from url
    const todoId=req.query.id
  
    const {title,description,completed,dueDate}=req.body
    if(!title || !description || !completed || !dueDate){
        throw res.json(new apiError(404,"All Fileds Are Required"))
    }
    //Checking if todo id is not present
    if(!todoId){
        throw res.json(new apiError(404,"Invlaid Todo Id"))
    }
    //Checking todo is exists or not
    const todo=await Todo.findByIdAndUpdate({_id:todoId},{title,description,completed,dueDate},{new:true})
    if(!todo){
        throw res.json(new apiError(404,"Todo Not Exists"))
    }
    return res.status(200).json(new apiResponce(200,{},"Todo Updated Successfuly"))
})


//Delete todo controller
const deleteTodo=asyncHandler(async(req,res)=>{
     //Fetching todo id from url
     const todoId=req.query.id
     //Checking if todo id is not present
     console.log("workiiiimg",req.query.id);
    if(!todoId){
        throw res.json(new apiError(404,"Invlaid Todo Id"))
    }
    //Delete the todo
    const deleteTodo=await Todo.findByIdAndDelete({_id:todoId},{new:true})
    if(!deleteTodo){
        throw res.json(new apiError(404,"Todo Not Exists"))
    }
    return res.status(200).json(new apiResponce(200,{},"Todo Deleted Successfuly"))
})

//Get all completed todos
const completedTodo=asyncHandler(async(req,res)=>{
    //This is aggregatio pipeline and use match opertor for finding a perticuler type documents
    const todos=await Todo.aggregate([{ $match:{completed:true}} ])
    if(!todos){
        throw res.json(new apiError(404,"No Completed Todo Availble"))
    }
    return res.status(200).json(new apiResponce(200,todos,"Todos Fetched"))
})

export {getAllTodos,createTodo,updateTodo,deleteTodo,completedTodo}