import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#ffffff] relative  px-4 sm:px-8 md:px-16 lg:px-52 pt-12 pb-8 z-10">
      <div className="container mx-auto mt-12 px-4 h-full flex flex-col justify-between">
        {/* Logo */}
        <div className="md:mb-0 md:mr-16 flex-shrink-0 mb-8">
          <Image src="/logo.svg" alt="Supreme Group Logo" width={150} height={50} />
        </div>

        {/* Top Section: Logo and Links */}
        <div className="flex mt-8 md:mt-16 flex-col md:flex-row items-start mb-8 flex-grow">
          
          {/* Links Columns Container */}
          <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8">
            
            {/* Applications */}
            <div>
              <h4 className="font-bold text-[16px] leading-[100%] tracking-[0.01em] uppercase text-[#000000] mb-4">APPLICATIONS</h4>
              <ul>
                <li className="mb-2"><a href="#" className="text-[#000000] @70% font-medium text-[14px] leading-[41px] tracking-[0.03em]">Apparel</a></li>
                <li className="mb-2"><a href="#" className="text-[#000000] @70% font-medium text-[14px] leading-[41px] tracking-[0.03em]">Automotive</a></li>
                <li className="mb-2"><a href="#" className="text-[#000000] @70% font-medium text-[14px] leading-[41px] tracking-[0.03em]">Filtration</a></li>
                <li className="mb-2"><a href="#" className="text-[#000000] @70% font-medium text-[14px] leading-[41px] tracking-[0.03em]">Customised Solutions</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-[16px] leading-[100%] tracking-[0.01em] uppercase text-[#000000] mb-4">COMPANY</h4>
              <ul>
                <li className="mb-2"><a href="#" className="text-[#000000] @70% font-medium text-[14px] leading-[41px] tracking-[0.03em]">Innovation</a></li>
                <li className="mb-2"><a href="#" className="text-[#000000] @70% font-medium text-[14px] leading-[41px] tracking-[0.03em]">Global Competency</a></li>
                <li className="mb-2"><a href="#" className="text-[#000000] @70% font-medium text-[14px] leading-[41px] tracking-[0.03em]">About Us</a></li>
                <li className="mb-2"><a href="#" className="text-[#000000] @70% font-medium text-[14px] leading-[41px] tracking-[0.03em]">Contact Us</a></li>
              </ul>
            </div>

            {/* More */}
            <div>
              <h4 className="font-bold text-[16px] leading-[100%] tracking-[0.01em] uppercase text-[#000000] mb-4">MORE</h4>
              <ul>
                <li className="mb-2"><a href="#" className="text-[#000000] @70% font-medium text-[14px] leading-[41px] tracking-[0.03em]">Careers</a></li>
                <li className="mb-2"><a href="#" className="text-[#000000] @70% font-medium text-[14px] leading-[41px] tracking-[0.03em]">Privacy Policy</a></li>
                <li className="mb-2"><a href="#" className="text-[#000000] @70% font-medium text-[14px] leading-[41px] tracking-[0.03em]">Terms and Conditions</a></li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="font-bold text-[16px] leading-[100%] tracking-[0.01em] uppercase text-[#000000] mb-4">FOLLOW US</h4>
              <ul>
                <li className="mb-2"><a href="#" className="text-[#000000] @70% font-medium text-[14px] leading-[41px] tracking-[0.03em]">Twitter</a></li>
                <li className="mb-2"><a href="#" className="text-[#000000] @70% font-medium text-[14px] leading-[41px] tracking-[0.03em]">LinkedIn</a></li>
                <li className="mb-2"><a href="#" className="text-[#000000] @70% font-medium text-[14px] leading-[41px] tracking-[0.03em]">Instagram</a></li>
                <li className="mb-2"><a href="#" className="text-[#000000] @70% font-medium text-[14px] leading-[41px] tracking-[0.03em]">Medium</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row mb-8 justify-between items-center mt-8 gap-4">
          <div className="w-full md:w-auto text-center md:text-left">
            <p className="text-[#000000] @70% font-medium text-[14px] leading-[41px] tracking-[0.03em]">©2023. All Rights Reserved.</p>
          </div>
          <div className="w-full md:w-auto text-center md:text-right md:mr-28">
            <p className="text-[#000000] @70% font-medium text-[14px] leading-[41px] tracking-[0.03em]">Supreme house: 110, 16th Road, Chembur, Mumbai - 400071.</p>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute bottom-0 right-0 hidden md:block">
         <Image src="/footer-design.svg" alt="Footer Design" width={300} height={300} />
      </div>
    </footer>
  );
};

export default Footer;
