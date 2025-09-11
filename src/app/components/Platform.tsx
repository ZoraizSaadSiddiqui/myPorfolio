"use client";

import { FaGitAlt, FaGithub } from "react-icons/fa";
import { SiFigma } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05 },
  }),
};

const tools = [
  { icon: <FaGitAlt />, label: "Git" },
  { icon: <FaGithub />, label: "GitHub" },
  { icon: <SiFigma />, label: "Figma" },
  { icon: <VscVscode />, label: "Visual Studio Code" },
];

const Platform = () => {
  return (
    <section className="mt-10" id="tools">
      <h2 className="text-center  text-[#1b8248] text-[80px] font-bold mt-9 mb-25">
        Platforms & Tools
      </h2>
<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-1 justify-items-center px-4 sm:px-8 text-center mb-12">
  {tools.map((tool, i) => (
    <motion.div
      key={tool.label}
      custom={i}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      whileHover={{ scale: 1.3 }}
      className="flex flex-col items-center transition-transform"
    >
      <div className=" text-[#1b8248] text-7xl mb-5">{tool.icon}</div>
      <span className="text-[17px] font-semibold text-[#1b8248]">
        {tool.label}
      </span>
    </motion.div>
  ))}
</div>

    </section>
  );
};

export default Platform;
