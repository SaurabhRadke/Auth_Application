"use client"
import { Outfit } from 'next/font/google'
import SignInArea from './Components/SignINArea';
import SignUpArea from './Components/SignUpArea';
import CoverArea from './Components/CoverArea';
import {SessionProvider} from 'next-auth/react'
const outfit = Outfit({ weight: '400',
subsets: ['latin'],
display: 'swap',})

export default function Home({session}) {
  
  return (
    <SessionProvider session={session}>
      <main className={` relative min-h-screen min-w-screen  flex justify-center items-center bg-gradient-to-r from-slate-100 to-sky-100 ${outfit.className}`}>
        <div className=" relative form w-7/12 h-[25rem]  rounded-xl flex overflow-hidden bg-white shadow-xl shadow-slate-600">
            <div className="signIn w-1/2 h-full flex flex-col justify-center items-center gap-3 ">
              <SignInArea/>
            </div>
            <div className="signUp w-1/2 h-full flex flex-col justify-center items-center gap-3">
              <SignUpArea/>
            </div>
            <CoverArea/>
        </div>
    </main>
    </SessionProvider>
    
  )
}
