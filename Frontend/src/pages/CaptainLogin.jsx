import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import { useContext } from "react";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const captain = {
      email: email,
      password: password,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/login`,
      captain
    );
    if (response.status === 200) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate("/captain-home");
    }

    setEmail(" ");
    setPassword(" ");
  };

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
          <h3 className="text-lg font-medium mb-2">What's your email?</h3>
          <input
            className="bg-[#eeeeee] rounded mb-2  px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="emial@example.com"
          />
          <h3 className="text-lg font-medium mb-2"> Enter Password</h3>
          <input
            className="bg-[#eeeeee] rounded mb-2 px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="password"
          />
          <button className="bg-[#111] text-white font-semibold mt-7 rounded  px-4 py-2  w-full text-lg placeholder:text-base">
            Login
          </button>
          <p className="text-center">
            Join the fleet?
            <Link to="/captain-signup" className="text-blue-600">
              Register yourself
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to="/login"
          className="bg-[#10b461] text-white flex items-center justify-center font-semibold mt-7 rounded  px-4 py-2  w-full text-lg placeholder:text-base"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
