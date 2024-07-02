import express from 'express'
import cors from 'cors'
const app=express();

//Use CORS for Cross Origin Resourse Policy that allowed to communicate our server to our frontend
app.use(cors({
    origin:'*',
    credentials:true
}))
//This middleware is used for accepting the json from frontend
app.use(express.json())
//This middleware is use to encode the url
app.use(express.urlencoded({extended:true}))


//importing todo routes here
import todoRoutes from './routes/todoRoutes.js';
//Now mount these routes
app.use("/api/v1",todoRoutes)

//This is home or default route
app.get("/home",(req,res)=>{
    res.json({
        success:true,
        message:"Working Successfuly"
    })
})

export default app;

