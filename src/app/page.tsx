import Hero from './components/Hero';
import Navbar from './components/Navbar';
import React from 'react';
import Skills from './components/Skills';
import Platform from './components/Platform';

export default function Home() {
  return (
    <main  className="min-h-screen w-full bg-gradient-to-br from-pink-100 via-white to-pink-300 flex flex-col items-center">

       <Navbar />
       <Hero />
       <Skills />
       <Platform />
        
       </main>
  );
}
