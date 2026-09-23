import { useState } from "react";
import brand from "./assets/Brand.jpg";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="font-inter min-h-screen bg-white">
      {/* Navbar */}
      <div className="flex justify-between items-center px-10 py-8">
        {/* Logo */}
        <div className="text-3xl font-semibold hover-effect cursor-pointer">
          Egle
        </div>

        {/* Section */}
        <div className="hidden sm:flex gap-15 text-xl font-semibold translate-x-14 cursor-pointer">
          <span className="hover-effect ">Home</span>
          <span className="hover-effect ">Services</span>
          <span className="hover-effect ">About us</span>
          <span className="hover-effect">Contact</span>
        </div>

        {/* Sign-up/in buttons */}
        <div className="hidden sm:flex gap-3 text-lg font-medium ">
          <button className="border-2 bg-gray-100 border-gray-300 px-8 py-2 rounded-4xl shadow-lg btn-hover-effect">
            Login
          </button>
          <button className="bg-slate-900 text-white px-8 py-2 rounded-4xl shadow-white shadow-lg btn-hover-effect">
            Register
          </button>
        </div>

        <button
          className="text-slate-900 text-3xl cursor-pointer sm:hidden"
          onClick={() => setOpen(!open)}
        >
          ≡
        </button>
      </div>

      {/* Mobile Nav */}

      {open && (
        <div className="flex flex-col gap-5 text-lg font-semibold items-center cursor-pointer sm:hidden">
          <span className="hover-effect ">Home</span>
          <span className="hover-effect ">Services</span>
          <span className="hover-effect ">About us</span>
          <span className="hover-effect">Contact</span>
        </div>
      )}

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 px-6 py-20">
        {/* Text */}
        <div className="w-full max-w-125">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Build something people love.
          </h1>

          <p className="text-lg font-semibold mt-4">
            {" "}
            Create beautiful experiences with less effort.
          </p>

          <div className="flex gap-4 mt-6">
            <button className="bg-slate-900 text-white px-6 py-2 sm:px-10 sm:py-4 rounded-4xl shadow-white shadow-lg btn-hover-effect">
            {" "}
            Get Started
          </button>

               <button className=" bg-slate-900 text-white px-6 py-2 sm:px-10 sm:py-4 rounded-4xl shadow-white shadow-lg btn-hover-effect">
            {" "}
            View Demo
          </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full max-w-125">
          <img
            src={brand}
            alt=""
            className="block w-full max-w-full h-auto rounded-full"
          />
        </div>
      </section>
    </div>
  );
}

export default App;
