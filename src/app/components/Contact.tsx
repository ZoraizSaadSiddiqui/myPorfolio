// "use client";
// import React, { useState } from 'react';

// const Contact = () => {
//   const [form, setForm] = useState({ name: '', email: '', message: '' });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//     // You can add your form submission logic here
//   };

//   return (
//     <section className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
//       <h2 className="text-2xl font-bold text-pink-600 mb-4 text-center">Contact Me</h2>
//       {submitted ? (
//         <div className="text-green-600 text-center font-semibold">Thank you for reaching out!</div>
//       ) : (
//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={form.name}
//             onChange={handleChange}
//             required
//             className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={form.email}
//             onChange={handleChange}
//             required
//             className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             value={form.message}
//             onChange={handleChange}
//             required
//             rows={4}
//             className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
//           />
//           <button
//             type="submit"
//             className="bg-pink-600 text-white font-bold py-2 rounded hover:bg-pink-700 transition-colors"
//           >
//             Send Message
//           </button>
//         </form>
//       )}
//     </section>
//   );
// };

// export default Contact;
// //"use client";
// import React, { useState } from "react";
// import emailjs from "emailjs-com";

// const Contact = () => {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     emailjs
//       .send(
//         "YOUR_SERVICE_ID",   // from EmailJS
//         "YOUR_TEMPLATE_ID",  // from EmailJS
//         {
//           user_name: form.name,
//           user_email: form.email,
//           message: form.message,
//         },
//         "YOUR_PUBLIC_KEY"    // from EmailJS
//       )
//       .then(
//         () => {
//           setSubmitted(true);
//           setForm({ name: "", email: "", message: "" }); // reset form
//         },
//         (error) => {
//           alert("❌ Failed to send. Try again!");
//           console.error(error.text);
//         }
//       );
//   };

//   return (
//     <section className="mt-10" id="contact">
//       <h2 className="text-center text-[#1b8248] text-[60px] font-bold mt-9 mb-10">
//         Contact Me
//       </h2>

//       <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-md">
//         {!submitted ? (
//           <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="Your Name"
//               required
//               className="border rounded text-[#1b8248] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1b8248]"
//             />

//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="Your Email"
//               required
//               className="border rounded text-[#1b8248] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1b8248]"
//             />

//             <textarea
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//               placeholder="Your Message"
//               required
//               rows={4}
//               className="border rounded text-[#1b8248] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1b8248]"
//             />

//             <button
//               type="submit"
//               className="py-3 bg-[#1b8248] text-white font-bold rounded hover:bg-[#3d6d4e] transition-colors"
//             >
//               Send Message
//             </button>
//           </form>
//         ) : (
//           <div className="text-center">
//             <h3 className="text-2xl font-bold text-[#1b8248]">
//               🎉 Thank you for submitting!
//             </h3>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Contact;
