import React from "react";
import UserLogin from "./pages/UserLogin.jsx";
import Home from "./pages/Home.jsx";
import UserSignup from "./pages/UserSignup.jsx";
import CaptainLogin from "./pages/CaptainLogin.jsx"
import CaptainSignup from "./pages/CaptainSignup.jsx"
import {Routes , Route} from "react-router-dom"


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/catpain-signup" element={<CaptainSignup />} />
      </Routes>
    </div>
  );
};

export default App;
