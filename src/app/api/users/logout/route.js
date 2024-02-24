// -->There are multiples way of doing logout --> we will use ->Remove our token
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json({
      message: "Logout Succesful",
      sucess: true,
    });
    response.cookies.set("token","",{httpOnly:true,expires:new Date(0)})
    return response
  } catch (error) {
    console.log("Logout Error occured", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
