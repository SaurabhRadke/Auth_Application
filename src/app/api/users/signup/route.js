import {connect} from "@/dbConfig/dbConfig.js"
import User from "@/models/userModels.js"
import { NextRequest,NextResponse } from "next/server"
import bcrypt from "bcryptjs"



connect()

export async function POST(request){
    try{
        const reqBody=await request.json()
        const {username,email,password} = reqBody
        console.log(reqBody);

        // catch if user already exist
        const user = await User.findOne({email})
        if(user){
            return NextResponse.json({error:"User already exists"},{status:400})
        }

        // hash password
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)
        // console.log("1")
        const newUser =new User({username,email,password:hashedPassword})
        // console.log("2")
        const savedUser = await newUser.save()
        console.log(savedUser)

        return NextResponse.json({message:"User Created succesfully",success:true,savedUser})

    }
    catch(error){
        return NextResponse.json({error:error.message},
        {status:500}
        )

    }
}