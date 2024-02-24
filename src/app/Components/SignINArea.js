"use client"
import { FaGooglePlusG } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import {useRef, useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation'
import { useSession,signIn,signOut } from "next-auth/react";

export default function SignInArea(){
    const {data:session}=useSession()
    const  [loadingg,setLoadingg]=useState(false)
    const lEmail=useRef()
    const lPassword=useRef()
    const router = useRouter()

    const signINAction=async()=>{
        try {
            setLoadingg(true)
            const loginData={email:lEmail.current.value,password:lPassword.current.value}
            console.log(loginData)
            lEmail.current.value=""
            lPassword.current.value=""
            const loginResponse=await axios.post("/api/users/login",loginData)
            console.log(loginResponse)
            // revalidatePath('/profile') // Update cached posts
            router.push('/profile')
        } catch (error) {
            console.log("Login Failed",error)
        }finally{
            setLoadingg(false)
        }
    }

    return(
        <>
              <h2 className="text-3xl font-extrabold tracking-widest">Sign In</h2>
              <div className="icons w-7/12 h-10 grid place-content-center gap-3 grid-cols-4 text-md">
                  <div className='h-10 w-10 border-2 grid place-content-center rounded-md cursor-pointer'><FaGooglePlusG /></div>
                  <div className='h-10 w-10 border-2 grid place-content-center rounded-md cursor-pointer'><FaFacebookF /></div>
                  <div className='h-10 w-10 border-2 grid place-content-center rounded-md cursor-pointer' onClick={()=>signIn('github')}><IoLogoGithub/></div>
                  <div className='h-10 w-10 border-2 grid place-content-center rounded-md cursor-pointer'><FaLinkedinIn /></div>
              </div>
              <div className="relative inputs w-full h-40  flex justify-center items-center flex-col gap-3 ">
                <input type="email" className='bg-slate-200 w-9/12 text-black h-8 rounded-md outline-none px-4' placeholder='Email' ref={lEmail}/>
                <input type="password" className='bg-slate-200 w-9/12 text-black h-8 rounded-md outline-none px-4' placeholder='Password' ref={lPassword}/>
                <div className="absolute top-0 text-[0.8rem] text-slate-500">or use your email password</div>
                <div className="absolute bottom-0 text-[0.8rem] text-slate-500 underline">Forgot your password?</div>
              </div>
                <button className="w-4/12 h-8 bg-violet-900 text-white text-sm rounded-md py-1" onClick={signINAction}>{loadingg?"Loading..":"SIGN IN"}</button>
        </>
    )
}