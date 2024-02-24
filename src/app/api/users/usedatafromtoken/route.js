import  { getDatafromToken } from "@/helpers/getdatafromtoken";

// Get token data from token secreat that i have injected while login (in Login route)
import { NextResponse } from "next/server";
import User from "@/models/userModels";
import { connect } from "@/dbConfig/dbConfig";


connect();
export async function GET(request){
    try {
        const User_id= await getDatafromToken(request)
        const user_data_from_token=await User.findOne({_id:User_id}).select("-password");
        return NextResponse.json({
            message:"User found",
            data:user_data_from_token
        })
    } catch (error) {
        return NextResponse.json({error:error.message},{status:400})
    }
}