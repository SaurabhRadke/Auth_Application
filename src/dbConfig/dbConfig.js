import mongoose from "mongoose";

// In every API we willl use this method Name connect for edge running there is no other option 
export async function connect(){
    try{
       await mongoose.connect("mongodb+srv://radkesaurabh1999:saurabh1234@cluster0.h38v9.mongodb.net/"
       );
        const connection=mongoose.connection

        connection.on('connected',()=>{
            console.log("MongoDb connected Succesfully")
        })
        connection.on('error',(err)=>{
            console.log("There is son Error for connectng Db with Mongoose",err)
            process.exit()
        })
    }
    catch(error){
        console.log("Something Went Wrong",error)
    }
}