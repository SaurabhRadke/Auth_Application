import { NextRequest } from "next/server";
import jwt from "jsonwebtoken"

export const getDatafromToken=(request)=>{
    try {
        const secrat_token=request.cookies.get("token")?.value || "";
        const actualToken=jwt.verify(secrat_token,process.env.JWT_SECREAT_KEY)
        return actualToken.id

    } catch (error) {
        throw new Error(error.message)
    }
}