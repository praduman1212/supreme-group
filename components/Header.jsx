import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full h-[80px] px-4 lg:px-14 bg-[#F9FBFF] backdrop-blur-[94px] flex items-center justify-between shadow-sm z-50 relative">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={146}
          height={41}
          className="object-contain w-[120px] sm:w-[146px]"
        />
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden p-2 text-[#000000]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-[40px]">
        {/* Contact Us Button */}
        <button className="bg-[#5CD6FF] text-[#000000] px-4 py-2 rounded-full font-medium hover:bg-[#48c6f5] transition">
          Contact Us
        </button>
        {/* Social Icons */}
        <div className="flex items-center gap-[52px] mr-10">
          <Image
            src="/linkedin-icon.svg"
            alt="LinkedIn Icon"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <div className="flex items-center gap-1">
            <Image
              src="/language-icon.svg"
              alt="Language Icon"
              width={22}
              height={22}
              className="cursor-pointer"
            />
            <span className="text-[#000000]">ENG</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-[80px] left-0 right-0 bg-[#F9FBFF] shadow-md p-4 flex flex-col items-center gap-4">
          <button className="bg-[#5CD6FF] text-[#000000] px-4 py-2 rounded-full font-medium hover:bg-[#48c6f5] transition w-full max-w-[200px]">
            Contact Us
          </button>
          <div className="flex items-center gap-6">
            <Image
              src="/linkedin-icon.svg"
              alt="LinkedIn Icon"
              width={24}
              height={24}
              className="cursor-pointer"
            />
            <div className="flex items-center gap-0">
              <Image
                src="/language-icon.svg"
                alt="Language Icon"
                width={24}
                height={24}
                className="cursor-pointer"
              />
              <span className="text-[#000000]">ENG</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
