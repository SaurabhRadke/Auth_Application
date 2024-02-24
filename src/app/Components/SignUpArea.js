import { FaGooglePlusG } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import axios from "axios"
import { useState,useRef, useEffect } from "react";
// import toast, { Toaster } from 'react-hot-toast';
import { useSession,signIn,signOut } from "next-auth/react";

export default function SignUpArea(){
  const {data:session}=useSession()
  const name=useRef()
  const email=useRef()
  const password=useRef()
  // const router=useRouter()
  const [loading,setLoading]=useState(false)
  // const notify = () => toast('Sign Up succesfully. Go to Login page ');
  const addUser=async()=>{
    // console.log([name.current.value,email.current.value,password.current.value])
    
    try {
      setLoading(true)
      const userdata={username:name.current.value,email:email.current.value,password:password.current.value}
      console.log(userdata)
      const response=await axios.post("/api/users/signup",userdata)
      console.log(response)
      // router.push("/login")
      // Now we can move cover page to login for login
      // notify
      name.current.value=""
      email.current.value=""
      password.current.value=""
    } catch (error) {
      console.log("Sign Up failed",error)
      toast.error(error.Message)
    }finally{
      setLoading(false)
    }
  }
    return(
        <>
            <h2 className="text-3xl font-extrabold tracking-widest">Create Account</h2>
              <div className="icons w-7/12 h-10 grid place-content-center gap-3 grid-cols-4 text-md">
                  <div className='h-10 w-10 border-2 grid place-content-center rounded-md cursor-pointer'><FaGooglePlusG /></div>
                  <div className='h-10 w-10 border-2 grid place-content-center rounded-md cursor-pointer'><FaFacebookF /></div>
                  <div className='h-10 w-10 border-2 grid place-content-center rounded-md cursor-pointer' onClick={()=>signIn('github')}><IoLogoGithub/></div>
                  <div className='h-10 w-10 border-2 grid place-content-center rounded-md cursor-pointer'><FaLinkedinIn /></div>
              </div>
              <div className="relative inputs w-full h-40  flex justify-center items-center flex-col gap-3">
                <input type="text" required autoComplete="off" className='bg-slate-200 w-9/12 text-black h-8 rounded-md outline-none px-4 mt-2' placeholder='Name' ref={name} />
                <input type="email" required autoComplete="off" className='bg-slate-200 w-9/12 text-black h-8 rounded-md outline-none px-4' placeholder='Email' ref={email}/>
                <input type="password" required autoComplete="off" className='bg-slate-200 w-9/12 text-black h-8 rounded-md outline-none px-4' placeholder='Password' ref={password}/>
                <div className="absolute top-0 text-[0.8rem] text-slate-500">or use your email for registeration</div>
              </div>
              <button className="w-4/12 h-8 bg-violet-900 text-white text-sm rounded-md py-1" onClick={addUser}>{loading?"Loading...":"SIGN UP"}</button>
              {/* <Toaster /> */}
        </>
    )
}