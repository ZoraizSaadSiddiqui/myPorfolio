"use client";
import React from 'react'
import { useState } from 'react';

const ContactUs = () => {
    const [submitted setShowPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPopup(true); // show popup
    e.currentTarget.reset(); // clear form
  };

  return (
     <section className="mt-10" id="contact">
      <h2 className="text-center  text-[#1b8248] text-[80px] font-bold mt-9 mb-15">
        Contact Me
      </h2>
    <div className="main jmax-w-md mx-auto mt-10 p-8 bg-white rounded-xl shadow-md mb-4 ">
        <form className="form flex flex-col gap-4" onSubmit={handleSubmit}>
            <input type = "text" placeholder='Your Name' required className="border rounded  text-[#1b8248] focus:outline-none  focus:ring-2 focus:ring-[#1b8248] px-3 py-2 "></input>
           
            <input type="email" placeholder="Your Email" required pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" className="border rounded  text-[#1b8248] focus:outline-none  focus:ring-2 focus:ring-[#1b8248] px-3 py-2 "></input>
            <textarea name="message" placeholder= "Your Message" required rows={4} className="border  text-[#1b8248] rounded focus:outline-none  focus:ring-2 focus:ring-[#1b8248] px-3 py-2 "></textarea>
        <button type="submit" onClick={() => setShowPopup(false)} className=" py-4 bg-[#1b8248] text-white font-bold  rounded hover:bg-[#3d6d4e] transition-colors">
            Send Message 
        </button>
            </form> 
    </div>
      </section>
  )
}

export default ContactUs