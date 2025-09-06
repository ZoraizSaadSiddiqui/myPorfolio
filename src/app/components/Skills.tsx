"use client";

import {
  FaJava,
  FaReact,
  FaJsSquare,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
} from "react-icons/fa";
import { SiCplusplus, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05 },
  }),
};

const skillIcons = [
  { icon: <SiCplusplus />, label: "C++" },
  { icon: <FaJava />, label: "Java" },
  { icon: <FaJsSquare />, label: "JavaScript" },
  { icon: <FaReact />, label: "React" },
  { icon: <FaPython />, label: "Python" },
  { icon: <FaHtml5 />, label: "HTML" },
  { icon: <FaCss3Alt />, label: "CSS" },
  { icon: <FaNodeJs />, label: "Node.js" },
  { icon: <SiTailwindcss />, label: "Tailwind" },
  { icon: <SiNextdotjs />, label: "Next.js" },
];

const Skills = () => {
  return (
    <section className="mt-10" id="skills">
      <h2 className="text-center text-pink-600 text-[50px] font-bold  mt-12 mb-12">
        Skills
      </h2>
<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-12 justify-items-center px-4 sm:px-8 text-center mb-12">
  {skillIcons.map((skill, i) => (
    <motion.div
      key={skill.label}
      custom={i}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      whileHover={{ scale: 1.3 }}
      className="flex flex-col items-center transition-transform"
    >
      <div className="text-pink-600 text-7xl mb-5">{skill.icon}</div>
      <span className="text-[20px] font-semibold text-pink-700">
        {skill.label}
      </span>
    </motion.div>
  ))}
</div>
    </section>
  );
};

export default Skills;
