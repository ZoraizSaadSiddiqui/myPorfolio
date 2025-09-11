"use client";
import React, { useEffect, useState } from "react";

const roles = [ "Software Engineer","Web Developer" ];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    function changeRole() {
      setRoleIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= roles.length) {
          return 0; // go back to first role
        }
        return nextIndex;
      });
    }

    // ✅ start interval
    const interval = setInterval(changeRole, 1800);

    // ✅ cleanup when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-h-full mt-16 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[700px] rounded-2xl flex flex-col items-center justify-center bg-gradient-to-br from-[#3cb371] via-[#2e8b57] to-[#206040]
 text-white shadow-lg p-6">
      <h2 className="text-[18px] font-bold text-white mt-4 mb-2">Hi, I am</h2>
      <h1 className="text-[35px] font-extrabold text-white mb-2">
        Zoraiz Saad Siddiqui
      </h1>
      
        <span className="text-[20px] font-semibold transition-all duration-500">
          {roles[roleIndex]}
        </span>
      
      <p className="text-[16px] font-medium text-white mt-4 mb-7 text-center">
        Passionate about building impactful digital experiences.<br />
        Always eager to learn new technologies and solve real-world problems.<br />
        Explore my projects, skills, and journey below.<br />
        Let's connect and create something amazing together!
      </p>

      
      <div className="flex gap-4 mt-6">
    
        <a
          href="/cv.pdf" // place your cv.pdf in the public folder
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-white text-[#1b8248] rounded-full font-bold text-[13px] hover:bg-pink-100 transition-colors shadow"
        >
          Download CV
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-white text-[#1b8248] rounded-full font-bold text-[13px] hover:bg-pink-100 transition-colors shadow"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}