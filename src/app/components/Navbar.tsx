import React from "react";

export default function Navbar() {
  return (
    <nav
      className=" mx-auto mt-4 w-fit  rounded-full p-[0.5px] border-3 border-transparent animated-gradient-border bg-clip-padding
      "
    >
      <div className=" bg-white rounded-full px-7 py-1 flex gap-6 items-center justify-center ">
        <a
          href="#home"
          className=" text-[9px] font-bold bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent">
          Home
        </a>
        <a href="#skills"  className=" text-[9px] font-bold bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent">
          Skills
        </a>
         <a href="#skills"  className=" text-[9px] font-bold bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent">
          Platform & Tools
        </a>
        <a href="#about"  className=" text-[9px] font-bold bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent">
          About
        </a>
        <a href="#projects" className=" text-[9px] font-bold bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent">
          Projects
        </a>
        <a href="#contact"  className=" text-[9px] font-bold bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent">
          Contact Me
        </a>
      </div>
    </nav>
  );
}