import React from 'react';

function Navbar() {
    return (
        <nav className="bg-white py-[70px] px-[100px] flex justify-between items-center">
            <div className="flex-shrink-0">
                <a href="/">
                    <img src="/logo.png" width="121" height="20" alt="Logo" className="object-contain" />
                </a>
            </div>
            <div className="flex items-center space-x-6">
                <NavLink href="/">HOME</NavLink>
                <NavLink href="/pricing">PRICING</NavLink>
                <NavLink href="/events">EVENTS</NavLink>
                <NavLink href="/company">COMPANY</NavLink>
            </div>
            <div className="flex items-center space-x-6">
                <NavLink href="/login">LOGIN</NavLink>
                <a href="/signup" className="flex items-center text-white text-base font-medium bg-black px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300">
                    <span className="mr-2">Sign Up Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className="inline-block">
                        <path d="M3.75 9H14.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 3.75L14.25 9L9 14.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
            </div>
        </nav>
    );
}

function NavLink({ href, children }) {
    return (
        <a href={href} className="text-gray-500 text-[13px] hover:text-[#5e1ee5] transition-colors duration-300">
            {children}
        </a>
    );
}

export default Navbar;