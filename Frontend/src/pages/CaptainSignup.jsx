import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const CaptainSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState("")

 
  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      username:{
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password
    })
    setEmail(" ");
    setPassword(" ");
    setFirstName(" ");
    setLastName(" ");
  }

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
    <div>
      <img
        className="w-16 mb-5  rounded-3xl"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkR3_XutLome56HE-Zh552ZDdVJ_ETq-G3gw&s"
        alt="uber"
      />
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <h3 className="text-lg font-medium mb-2">What's our Captain's name</h3>
        <div className=" flex gap-2">
          <input
            className="bg-[#eeeeee] rounded mb-2  px-4 py-2 border w-1/2 text-lg placeholder:text-base"
            required
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name"
          />
          <input
            className="bg-[#eeeeee] rounded mb-2  px-4 py-2 border w-1/2 text-lg placeholder:text-base"
            required
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last name"
          />
        </div>
        <h3 className="text-lg font-medium mb-2">What's our Captain's email?</h3>
        <input
          className="bg-[#eeeeee] rounded mb-2  px-4 py-2 border w-full text-lg placeholder:text-base"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="emial@example.com"
        />
        <h3 className="text-lg font-medium mb-2"> Enter Password</h3>
        <input
          className="bg-[#eeeeee] rounded mb-2  px-4 py-2 border w-full text-lg placeholder:text-base"
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button className="bg-[#111] text-white font-semibold mt-7 rounded  px-4 py-2  w-full text-lg placeholder:text-base">
          Login
        </button>
        <p className="text-center">
          Already have an account?
          <Link to="/captain-login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </form>
    </div>
    <div>
    <p className="text-[10px] text-center">
          This site is protected by reCAPTCHA and the <span className="underline">Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.
        </p>
    </div>
  </div>
  )
}

export default CaptainSignup
