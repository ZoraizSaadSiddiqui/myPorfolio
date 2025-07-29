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
    <section className="mt-10 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[700px] rounded-2xl flex flex-col items-center justify-center bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600 text-white shadow-lg p-6">
      <h2 className="text-[12px] font-bold text-white mb-1">Hi, I am</h2>
      <h1 className="text-[18px] font-extrabold text-white mb-1">
        Zoraiz Saad Siddiqui
      </h1>
      <div className="h-[14px] overflow-hidden mb-1 flex items-center justify-center">
        <span className="text-[10px] font-semibold transition-all duration-500">
          {roles[roleIndex]}
        </span>
      </div>
      <p className="text-[8px] font-medium text-white mb-2 text-center">
        Passionate about building impactful digital experiences.<br />
        Explore my projects, skills, and journey below.
      </p>

      
      <div className="flex gap-4 ">
    
        <a
          href="/cv.pdf" // place your cv.pdf in the public folder
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 bg-white text-pink-600 rounded-full font-bold text-[8px] hover:bg-pink-100 transition-colors shadow"
        >
          Download CV
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 bg-white text-pink-600 rounded-full font-bold text-[8px] hover:bg-pink-100 transition-colors shadow"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}