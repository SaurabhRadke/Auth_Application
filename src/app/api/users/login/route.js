import { connect } from "@/dbConfig/dbConfig.js";
import User from "@/models/userModels.js";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

connect(); //Every time we need to connect with DB beacause Nextjs is an Edge framework

export async function POST(request) {
  try {
    const reqCredentials = await request.json();
    const { email, password } = reqCredentials;
    console.log(reqCredentials);

    //check if user exist or not
    const client = await User.findOne({ email });
    if (!client) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      );
    }
    // Check password is correct
    const clientPassword = await bcrypt.compare(password, client.password);

    if (!clientPassword) {
      return NextResponse.json(
        { error: "Password did not Matched" },
        { status: 400 }
      );
    }
    console.log("User Exist")

     // As we verfied that all input fields are correct then we need to generate token --->It is create by
     //      JSON WebToken we encrypt that token and we send it to user cookies not on user local storage because then it can be manipulated
        const tokenData={
            id:client._id,
            username:client.username,
            email:client.password
        }
        // Create Token 
        const token=await jwt.sign(tokenData,process.env.JWT_SECREAT_KEY,{expiresIn:"1d"})

        const response=NextResponse.json({
            message:"Login succesful",
            success:true

        })
        response.cookies.set("token",token,{httpOnly:true})
        return response;

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
