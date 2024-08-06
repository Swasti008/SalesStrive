import React from "react";
import LoginForm from "./Form";
import LoginImage from "../assets/loginImage.png";
import Typewriter from "./TypeWritter";

export default function Login() {
  return (
    <div className="flex md:flex-row w-full justify-between items-center px-28 mt-40 flex-col mb-20 ">
      <div className="flex flex-row md:flex-col">
        <h1 className="text-[#55a7db] md:text-2xl text-shadow-custom-blue h-9 font-semibold">
          <Typewriter
            text={"Join us today and elevate your success!"}
            delay={40}
          />
        </h1>
        <img src={LoginImage} alt="loginImage" />
      </div>
      <LoginForm />
    </div>
  );
}
