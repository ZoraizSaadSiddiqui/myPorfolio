import Hero from './components/Hero';
import Navbar from './components/Navbar';
import React from 'react';
import Skills from './components/Skills';
import Platform from './components/Platform';
// import Contact from './components/contact';
import ContactUs from './components/ContactUs';
import Project from './components/Project';

export default function Home() {
  return (
   <main className="min-h-screen w-full bg-gradient-to-br from-[#c6f3dd] via-white to-[#61d395] flex flex-col items-center">
    <Navbar />
    <Hero />
    <Skills />
    <Platform />
    {/* <Contact/> */}
    <ContactUs/>
    <Project/>
   </main>
  );
}
