import mongoose from "mongoose";

//Funtion for setup tha database connection
const dbConnect=async()=>{
    try {
        //User connect method to connect mongodb atlas server
        await mongoose.connect(process.env.DB_URI)
        console.log("--Database Connected--");
    } catch (error) {
        //Checking for database error
        console.log(error);
        //Stop the server on error occured
        process.exit(1)
    }
}

export default dbConnect;