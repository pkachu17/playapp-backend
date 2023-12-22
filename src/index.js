// require('dotenv').config({path: './env})
import dotenv from "dotenv";
dotenv.config({path: './.env'});

import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
.then(() => {
    app.on("error", (error)=>{
        console.log("MONGODB connection error", error);
        throw error;
    })
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running on port: ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("MONGO DB Connection failed!!!", error);
})





















//***************************METHOD - 1 **************************************************/

// import mongoose from 'mongoose';
// import { DB_NAME } from "./constants";

// import express from "express";
// const app = express();

// ( async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error", () => {
//             console.log("ERROR: ", error);
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is running on port ${process.env.PORT}`);
//         })

//     }catch(error){
//         console.log("ERROR: ",error);
//         throw error
//     }
// })()