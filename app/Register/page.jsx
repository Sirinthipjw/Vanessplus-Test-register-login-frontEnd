"use client";
import React,{ useState } from "react";
import axios from "axios";
import fetch from "whatwg-fetch";


const Register = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [date, setDate] = useState('')
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [tel, setTel] = useState('')

   
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            firstName == "" ||
            lastName == "" ||
            gender == "" ||
            date == "" ||
            email == "" ||
            password == "" ||
            tel == "" 
            
        ) 
        {
            alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
            return;
        }

        const payload = {
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            date : date,
            email: email,
            password :password,
            tel: tel,
        };
        try {
            const res = await axios.post(
              "http://localhost:3200/Register",
              {data:payload},
              {
                headers: {
                  "Content-Type": "application/json",
                },
              },
            );
            console.log(res.data) 
        } catch (e) {}
        window.location.href= "../login"       
    }
    return(
     <>
        <div className="flex-col  flex items-center justify-cente py-16">
            <form className="bg-white p-6 rounded shadow-md w-1/3 h-auto " onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-4 text-center text-sky-800">Register</h2>
                <div className="pt-5 grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label className="block  text-sky-800">First Name</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                
                    <div>
                        <label className="block  text-sky-800">Last Name</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                
                

                    <div>
                        <label className="block text-sky-800">Date of Birth</label>
                        <input
                            type="date"
                            className="w-full p-2 border border-gray-300 rounded mt-1 text-sky-800"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </div>

                    <div >
                        <label className="block text-sky-800">Gender</label>
                        <select
                            className="w-full p-2 border border-gray-300 rounded mt-1 text-sky-800"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            required
                        >
                            <option value="" disabled>Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div >
                        <label className="block text-sky-800">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block  text-sky-800">Telephone</label>
                        <input
                            type="tel"
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            value={tel}
                            onChange={(e) => setTel(e.target.value)}
                            required
                        />
                    </div>


                    <div>
                        <label className="block text-sky-800">Password</label>
                        <input
                            type="password"
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sky-800">confirmPassword</label>
                        <input
                            type="password"
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Register
                </button>
            </form>
        </div>
     </>
    )   
}
export default Register;
    