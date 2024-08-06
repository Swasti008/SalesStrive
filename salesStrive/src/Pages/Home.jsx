import React from "react";
import { Link, Element } from "react-scroll";
import NavBar from "../components/NavBar";
import TopSection from "../assets/TopSectionImage.jpg";
import { Button } from "@/components/ui/button";
import Login from "../components/Login";
import { Parallax } from "react-parallax";
import ParallaxImage from "../assets/parallax.jpg";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <NavBar state={true} />
      <div className="flex md:flex-row md:w-full justify-between items-center px-12 flex-col">
        <div className="w-[90vw] md:w-[45vw] flex flex-col md:gap-5">
          <h1 className="text-white text-4xl font-bold">Drive Sales, </h1>
          <h1 className="text-white text-4xl font-bold">Reward Success</h1>
          <p className="text-gray-400 pt-10 text-2xl font-semibold">
            Track Sales, Manage Rewards, Maximize Earnings.
          </p>
          <div className="flex gap-4">
            <Link to="login-form" smooth={true} duration={500}>
              <Button className="w-fit">Get Started</Button>
            </Link>
            <Link to="about-section" smooth={true} duration={500}>
              <Button className="w-fit">Learn More</Button>
            </Link>
          </div>
        </div>

        <div className="border mt-10 md:mt-0 rounded-full shadow-glow">
          <img
            src={TopSection}
            alt="topSection"
            className="w-[70vw] md:w-[35vw]  rounded-full"
          />
        </div>
      </div>
      <Element name="login-form">
        <Login />
      </Element>
      <Parallax strength={800} bgImage={ParallaxImage}>
        <div className="h-96 flex items-center justify-center">
          <div className="flex justify-center items-center text-black text-xl bg-slate-50 rounded h-20 shadow-xl">
            <p className="p-5 font-bold">
              Effortless Sales Tracking | Seamless Reward Management | Boost
              Your Earnings
            </p>
          </div>
        </div>
      </Parallax>
      <Element name="about-section">
        <About />
      </Element>
      <Footer />
    </div>
  );
}
