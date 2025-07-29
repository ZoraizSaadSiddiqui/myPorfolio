"use client";
import {
  FaJava,
  FaReact,
  FaJsSquare,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiTailwindcss,
  SiNextdotjs,
  SiFigma,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function Skills() {
  return (
    <section className="mt-10">
      {/* ===== Skills Section ===== */}
      <h2 className="text-center text-pink-600 text-[30px] font-bold mb-7">
        Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6 text-center mb-12">
        <div className="flex flex-col items-center hover:scale-105 transition-transform">
          <SiCplusplus className="text-pink-600 text-4xl mb-2" />
          <span className="text-sm font-semibold text-pink-700">C++</span>
        </div>
        <div className="flex flex-col items-center hover:scale-105 transition-transform">
          <FaJava className="text-pink-600 text-4xl mb-2" />
          <span className="text-sm font-semibold text-pink-700">Java</span>
        </div>
        <div className="flex flex-col items-center hover:scale-105 transition-transform">
          <FaJsSquare className="text-pink-600 text-4xl mb-2" />
          <span className="text-sm font-semibold text-pink-700">
            JavaScript
          </span>
        </div>
        <div className="flex flex-col items-center hover:scale-105 transition-transform">
          <FaReact className="text-pink-600 text-4xl mb-2" />
          <span className="text-sm font-semibold text-pink-700">React</span>
        </div>
        <div className="flex flex-col items-center hover:scale-105 transition-transform">
          <FaPython className="text-pink-600 text-4xl mb-2" />
          <span className="text-sm font-semibold text-pink-700">Python</span>
        </div>
        <div className="flex flex-col items-center hover:scale-105 transition-transform">
          <FaHtml5 className="text-pink-600 text-4xl mb-2" />
          <span className="text-sm font-semibold text-pink-700">HTML</span>
        </div>
        <div className="flex flex-col items-center hover:scale-105 transition-transform">
          <FaCss3Alt className="text-pink-600 text-4xl mb-2" />
          <span className="text-sm font-semibold text-pink-700">CSS</span>
        </div>
        <div className="flex flex-col items-center hover:scale-105 transition-transform">
          <FaNodeJs className="text-pink-600 text-4xl mb-2" />
          <span className="text-sm font-semibold text-pink-700">Node.js</span>
        </div>
        <div className="flex flex-col items-center hover:scale-105 transition-transform">
          <SiTailwindcss className="text-pink-600 text-4xl mb-2" />
          <span className="text-sm font-semibold text-pink-700">Tailwind</span>
        </div>
        <div className="flex flex-col items-center hover:scale-105 transition-transform">
          <SiNextdotjs className="text-pink-600 text-4xl mb-2" />
          <span className="text-sm font-semibold text-pink-700">Next.js</span>
        </div>
      </div>

      {/* ===== Platforms & Tools Section ===== */}
      <h2 className="text-center text-pink-600 text-[30px] font-bold mb-7">
        Platforms & Tools
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6 text-center">
        <div className="flex flex-col items-center hover:scale-105 transition-transform">
          <FaGitAlt className="text-pink-600 text-4xl mb-2" />
          <span className="text-sm font-semibold text-pink-700">Git</span>
        </div>
        <div className="flex flex-col items-center hover:scale-105 transition-transform">
          <FaGithub className="text-pink-600 text-4xl mb-2" />
          <span className="text-sm font-semibold text-pink-700">GitHub</span>
        </div>
        <div className="flex flex-col items-center hover:scale-105 transition-transform">
          <SiFigma className="text-pink-600 text-4xl mb-2" />
          <span className="text-sm font-semibold text-pink-700">Figma</span>
        </div>
        {/* ✅ New Visual Studio block */}
        <div className="flex flex-col items-center hover:scale-105 transition-transform">
          <VscVscode className="text-pink-600 text-4xl mb-2" />
          <span className="text-sm font-semibold text-pink-700">
            Visual Studio Code
          </span>
        </div>
      </div>
    </section>
  );
}