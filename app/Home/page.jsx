"use client";
import axios from "axios"
import { useEffect, useState } from "react"
  
const  Home = () =>{
  const [userData, setUserData] = useState(null)

  useEffect(() =>{
    const fetchData = async() =>{
      try{
        const res = await axios.post("http://localhost:3200/Home")
        setUserData(res.data)
      }catch (error){
        console.error("Error fetching data : ",error)
      }
    }
    fetchData()
  },[])
  return (
    <>
      {userData && ( 
          <div className="pt-10 px-[20px]">
            <p className="text-center text-sky-900 text-3xl font-bold mb-4">Personal Information</p>
            <p>Firstname : {userData.firstName}</p>
            <p>Lastname : {userData.lastName}</p>
            <p>Date Birth : {userData.date}</p>
            <p>Gender: {userData.gender}</p>
            <p>Telephone : {userData.tel}</p> 
            <p>Email : {userData.email}</p>
            <p>Password : {userData.password} </p> 
          </div>
      )}
  </>
)}

export default Home;
  