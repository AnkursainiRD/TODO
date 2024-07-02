import express from 'express'
import { completedTodo, createTodo, deleteTodo, getAllTodos, updateTodo } from '../controller/todoController.js'
const router=express.Router()

//This route for get all todos
router.route("/getAllTodos").get(getAllTodos)
//This route for create the todo
router.route("/createTodo").post(createTodo)
//This route for update todo
router.route("/updateTodo").patch(updateTodo)
//This route for delete todo
router.route("/deleteTodo").delete(deleteTodo)
//This route for get all completed todos
router.route("/completedTodo").get(completedTodo)

export default router;