import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_large.jpg"
          alt="logo"
        />
      </div>
      <div className="flex justify-center items-center h-screen">
        <form className="relative p-12 bg-black w-3/12 ">
          <h1 className="font-bold text-white m-2 text-3xl">Sign In</h1>
          <input type="text" placeholder="email" className="p-2 m-2" />
          <input type="password" placeholder="password" className="p-2 m-2" />
          <button className="p-4 m-4">sign in</button>
        </form>
      </div>
    </>
  );
};

export default Login;
