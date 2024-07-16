"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const login = ()=>{
    const [email, setEmail] =useState('')
    const [password, setPassword] =useState('')
    const router = useRouter

    const handleLogin = async () =>{
        try{
            const res = await axios.post("http://localhost:3200/login",{email, password})
            if(res.data.success){
                router.push("/Home")
            }else{
                alert("Login fail!!!!!")
            }
        }catch(err){
            console.error("Login failed : ", err)
        }
    }

return(
 <>
 <div>
    <div className="flex flex-col min-screen justify-center items-center py-36">
        <div className="shadow-xl w-1/3 h-96 bg-slate-100 rounded-md">
            <div className="py-12">
                <p className="text-sky-800 text-4xl  font-semibold text-center">login</p>
                <form>
                    <div  className="px-14 py-5">
                        <div>
                            <label htmlFor="email" className="block text-sky-800">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                    />
                            </div>
                        </div>

                        <div className="mt-5">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sky-800">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-sky-800 hover:text-sky-800">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    placeholder="Password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                    />
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col items-center">
                        <button
                            onClick={handleLogin}
                            type="submit"
                            className=" bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
                            //onClick={handleClick}
                            style={{ width: "150px" }}
                        >
                        Login
                    </button>
                    <div className="mt-2">
                        <p className="text-sky-800 text-sm font-light text-center">
                            No account 
                            <Link href="/Register" className="text-sky-800 text-sm font-semibold text-center px-2"> 
                            Register?
                            </Link>
                        </p>
                        
                    </div>
                </div>
                </form>
            </div>
        </div>
    </div>
 </div>
   
 
 
 
 </>

)




}
export default login;
