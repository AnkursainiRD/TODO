import dotenv from "dotenv"
import app from "./app.js"
import dbConnect from "./config/database.js"

//Spred enviroment values to every routes in starting
dotenv.config({path:"./.env"})

//If server could not find the port so use 8000
const PORT=process.env.PORT || 8000

//Connted Database first before server started
dbConnect()
.then(()=>{
    app.listen(PORT,()=>{
        console.log("Server Started At:", PORT);
    })
})