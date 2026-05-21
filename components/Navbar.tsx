import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm py-2 px-4 flex items-center justify-between sticky top-0 z-20">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/airbnb-logo.svg" alt="Airbnb" width={32} height={32} />
        <span className="text-xl font-bold text-[#FF385C] hidden sm:inline">airbnb</span>
      </Link>
      <div className="flex items-center gap-3">
        <Link href="/catalog" className="text-sm font-semibold text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-full">
          Catalogo
        </Link>
        <button className="text-sm font-semibold text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-full">Hazte anfitrión</button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm7.93 9h-3.16a15.7 15.7 0 00-1.38-5.01A8.03 8.03 0 0119.93 11zM12 4c.9 1.22 1.66 3.07 1.93 5h-3.86C10.34 7.07 11.1 5.22 12 4zM4.07 13h3.16c.16 1.78.64 3.52 1.38 5.01A8.03 8.03 0 014.07 13zm3.16-2H4.07a8.03 8.03 0 014.54-5.01A15.7 15.7 0 007.23 11zM12 20c-.9-1.22-1.66-3.07-1.93-5h3.86c-.27 1.93-1.03 3.78-1.93 5zm2.39-1.99A15.7 15.7 0 0015.77 13h3.16a8.03 8.03 0 01-4.54 5.01z" fill="#222"/></svg>
        </button>
        <button className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-2 hover:shadow-sm">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16" stroke="#222" strokeWidth="2" strokeLinecap="round"/></svg>
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" stroke="#222" strokeWidth="1.7"/><path d="M4 20c0-3.31 3.58-6 8-6s8 2.69 8 6" stroke="#222" strokeWidth="1.7"/></svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
