import mongoose from 'mongoose'

//This is mongoose schema for todo model
const todoSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    completed: {
        type: Boolean,
        default: false,
      },
    dueDate: {
        type:Date,
        default:Date.now
    }
},{timestamps:true})

//Exporting the Todo for using in controlles and other files
export const Todo=mongoose.model("Todo",todoSchema)