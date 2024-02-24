"use client"
import { useState } from "react"
export default function CoverArea(){
    const [show ,setShow]=useState(false)
    const changeShow=()=>{
    setShow(!show)
  }
    return(
        <>
            <div className={`Cover absolute z-10 h-full  w-1/2 left-0 flex flex-col transition-all duration-700 ${show?"translate-x-[24.8rem]":null}  bg-purple-900 ${show?"rounded-tl-[6rem] rounded-bl-[6rem]":"rounded-tr-[6rem] rounded-br-[6rem]"} `}>
            {/* -translate-y-[25rem]  translate-x-[23.8rem] */}
              <div className={`PageLeft w-full h-full  flex flex-col justify-center items-center px-6 gap-6 py-[7.5rem] ${show && "-translate-y-[18rem]"} `} > 
                  <h1 className='font-bold text-3xl tracking-widest text-white '>Welcome Back!</h1>
                  <p className="text-center text-sm tracking-wider text-slate-300">Enter your Personal details to use all of site features</p>
                  <button className="w-5/12 h-9 border-2 border-slate-300 text-white text-sm rounded-md py-1 hover:bg-slate-200 duration-500 hover:text-purple-900" onClick={changeShow}>SIGN IN</button>
              </div>
              <div className={`PageRight w-full h-full b flex flex-col justify-center items-center px-8 gap-6 py-[7.5rem]  ${show &&"-translate-y-[25rem]"} `} >
              {/* -translate-y-[25rem] */}
                <h1 className='font-bold text-3xl tracking-widest text-white '>Hello, Friend!</h1>
                  <p className="text-center text-sm tracking-wider text-slate-300">Register with your personal details to use all of site features</p>
                  <button className="w-5/12 h-9 border-2 border-slate-300 text-white text-sm rounded-md py-1 hover:bg-slate-200 duration-500 hover:text-purple-900" onClick={changeShow}>SIGN UP</button>
              </div>
            </div>
        </>
    )
}