import React from "react";

const UserLogin = () => {
  return (
    <div className="p-7">
      <form>
        <h3 className="text-xl mb-2">What's your phone number or email?</h3>
        <input className="bg-[#eeeeee] rounded " required type="email" placeholder="emial@example.com" />
        <h3>Enter Password</h3>
        <input required type="password" placeholder="password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default UserLogin;
