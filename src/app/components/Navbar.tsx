"use client";

import React from "react";

const Navbar = () => {
    const links = [
        { href: "#home", label: "Home" },
        { href: "#skills", label: "Skills" },
        { href: "#tools", label: "Platform & Tools" },
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact Me" },
    ];

    return (
        // rounded navbar with animated border
        <nav className="mx-auto mt-5 w-fit rounded-full p-[2px] border-3 border-transparent animated-gradient-border">
            <div className="bg-white rounded-full px-15 py-3 flex gap-6 items-center justify-center">
                {links.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="text-[14px] font-bold bg-gradient-to-br from-[#29cd7b] to-[#2e8b57] bg-clip-text text-transparent hover:underline hover:decoration-[#1b8248] transition-transform hover:scale-110"
                    >
                        {/* bg-clip-text cut background into the shape of text */}
                        {/* text-transparent make normal text invisible so gradient shows */}
                        {link.label}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
