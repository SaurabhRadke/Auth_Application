"use client";
import Link from "next/link";
import { FiLogOut } from "react-icons/fi";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FaDatabase } from "react-icons/fa6";
import { useEffect,useState } from "react";
export default function profile() {
  const router = useRouter();
  const [Udata , seUdata]=useState("")

  const handelLogout = async () => {
    const loginResponse = await axios.get("/api/users/logout");
    console.log(loginResponse);
    router.push("/");
  };
  // Get the userdata as soon as any one comes to this page  a axios request will bes sent to userdatafromtoken route
  // useEffect(()=>{

  // },[])

  // Or We can get user data on Button Click
  const handegetUser=async()=>{
    const User_datat=await axios.get('/api/users/usedatafromtoken')
    console.log(User_datat.data);
    // setDefaultHighWaterMark()
    seUdata(User_datat.data.data.username)
  }
  return (
    <>
      <div className=" relative h-screen w-full ">
        <h1>Helllo Profile</h1>
        <ul>
          <Link href="/profile/Hello">Product 1</Link>
          <hr></hr>
          <Link href="/profile/Hi">Product 2</Link>
        </ul>
        <h1>{Udata}</h1>
        <div className=" absolute top-6 right-6">
          <button
            className="px-4 py-2 bg-[#258394] hover:bg-[#49bed3] duration-500 text-white tracking-wide flex gap-4 text-xl items-center rounded-lg"
            onClick={handelLogout}
          >
            <div className="text-lg">LOGOUT</div>
            <FiLogOut />
          </button>
        </div>
      </div>
      <div className="absolute left-1/2 top-2 ">
        <button
          className="px-4 py-2 bg-[#258394] hover:bg-[#49bed3] duration-500 text-white tracking-wide flex gap-4 text-xl items-center rounded-lg"
          onClick={handegetUser}
        >
          <div className="text-lg">Get Data</div>
          <FaDatabase />
        </button>
      </div>
    </>
  );
}
