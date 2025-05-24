import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const FourthPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (imageRef.current) {
            imageRef.current.classList.remove('animate-fadeInScale');
            void imageRef.current.offsetWidth;
            imageRef.current.classList.add('animate-fadeInScale');
          }
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div ref={componentRef} className="w-full min-h-screen bg-[#000000] flex flex-col overflow-hidden" style={{height: '100vh'}}>
      {/* Top Image and Heading */}
      <div className="w-full flex flex-col items-center pt-4 sm:pt-6 md:pt-8">
        {/* Heading with exact properties */}
        <div className="w-full flex justify-center px-4">
          <span className="block font-manrope font-light text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[1.2] tracking-[-0.5px] text-center text-white w-full max-w-[778.24px]">
            Evolving the drive with <b className="font-semibold">360-degree</b><br className="hidden sm:block" />nonwoven solutions
          </span>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row w-full items-center justify-between px-4 md:px-8 lg:px-20 mt-2 md:mt-4 overflow-hidden">
        {/* Left Navigation and Section Titles */}
        <div className="flex flex-col justify-center items-start w-full md:w-1/4 min-w-[160px] mb-8 md:mb-0">
          {/* Section Titles */}
          <div className="text-center md:text-left flex justify-center md:justify-start">
  <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-24 px-4 sm:px-6 md:px-0 max-w-[360px]">
    <h2 className="text-white text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-semibold font-montserrat leading-tight">
      Passenger vehicles
    </h2>
    <p className="text-gray-300 text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-montserrat mt-2 sm:mt-3 leading-relaxed">
      Revving up Nonwoven innovation from interior to exterior.
    </p>
  </div>
</div>

        </div>
        {/* Right Car Image with Animation */}
        <div className="flex-1 flex justify-center md:justify-end items-center">
          <div 
            ref={imageRef}
            className={`relative w-[280px] h-[160px] sm:w-[340px] sm:h-[200px] md:w-[480px] md:h-[270px] lg:w-[600px] lg:h-[340px] mb-8 transition-all duration-1000 ${isVisible ? 'animate-fadeInScale' : 'opacity-0 scale-95 translate-x-12'}`}
          >
            <Image
              src="/image1.png"
              alt="Car"
              layout="fill"
              objectFit="contain"
              priority
              className="transition-all duration-1000 ease-in-out transform scale-100"
            />
          </div>
        </div>
      </div>
      {/* Bottom Row */}
      <div className="w-full flex flex-col md:flex-row items-end md:items-center justify-end px-4 md:px-16 pb-4 gap-4 mt-2 relative overflow-hidden">
        {/* Pause Button */}
        <div className="absolute bottom-10 right-6 animate-fadeInScale">
          <div className="w-6 h-6 sm:w-8 sm:h-8 relative">
            <Image
              src="/pause-button.png"
              alt="Pause"
              layout="fill"
              objectFit="contain"
              className="transition-all duration-500"
            />
          </div>
        </div>
        {/* Center: Icon Row */}
        <div className="flex flex-row items-center gap-2 md:gap-2 mb-4 md:mr-24 ml-auto overflow-x-auto md:overflow-visible">
          {/* Icon items */}
          <div className="flex flex-col items-center min-w-[60px]">
            <div className="w-8 h-5 sm:w-10 sm:h-6 relative">
              <Image
                src="/image1.png"
                alt="Complete Body"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <span className="text-white text-[10px] sm:text-xs mt-1">Complete Body</span>
          </div>
          <div className="flex flex-col items-center opacity-30 min-w-[60px]">
            <div className="w-8 h-5 sm:w-10 sm:h-6 relative">
              <Image
                src="/image1.png"
                alt="Front"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <span className="text-white text-[10px] sm:text-xs mt-1">Front</span>
          </div>
          <div className="flex flex-col items-center opacity-30 min-w-[60px]">
            <div className="w-8 h-5 sm:w-10 sm:h-6 relative">
              <Image
                src="/image1.png"
                alt="Cabin"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <span className="text-white text-[10px] sm:text-xs mt-1">Cabin</span>
          </div>
          <div className="flex flex-col items-center opacity-30 min-w-[60px]">
            <div className="w-8 h-5 sm:w-10 sm:h-6 relative">
              <Image
                src="/image1.png"
                alt="Trunk"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <span className="text-white text-[10px] sm:text-xs mt-1">Trunk</span>
          </div>
          <div className="flex flex-col items-center opacity-30 min-w-[60px]">
            <div className="w-8 h-5 sm:w-10 sm:h-6 relative">
              <Image
                src="/image1.png"
                alt="Exterior"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <span className="text-white text-[10px] sm:text-xs mt-1">Exterior</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthPage; 