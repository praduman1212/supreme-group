import React, { useState, useEffect } from 'react';
import FirstPage from '../components/FirstPage';
import SecondPage from '../components/SecondPage';
import ThirdPage from '../components/ThirdPage';
import FourthPage from '../components/FourthPage';
import FifthPage from '../components/FifthPage';
import SixthPage from '../components/SixthPage';
import SeventhPage from '../components/SeventhPage';


const pages = [
  { id: 1, component: FirstPage },
  { id: 2, component: SecondPage },
  { id: 3, component: ThirdPage },
  { id: 4, component: FourthPage },
  { id: 5, component: FifthPage },
  { id: 6, component: SixthPage },
  { id: 7, component: SeventhPage },
 
];

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePageClick = () => {
    if (currentPage < pages.length - 1 && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentPage(prev => prev + 1);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const handleBackToTop = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentPage(0);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentPage(prev => prev - 1);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Previous Page Button - Positioned 10rem above the navigation line */}
      {currentPage > 0 && (
        <button
          onClick={handlePreviousPage}
          className="fixed left-9 top-[calc(50%-12rem)] transform -translate-x-1/2 z-50 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 15l7-7 7 7" 
            />
          </svg>
        </button>
      )}

      {/* Navigation Line */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 w-0.5 h-64 bg-gray-500 z-50">
        <div 
          className="w-0.5 bg-white transition-all duration-500"
          style={{ 
            height: `${(currentPage / (pages.length - 1)) * 100}%`,
          }}
        />
      </div>

      {/* Back to Top Button */}
      {currentPage === pages.length - 1 && (
        <button
          onClick={handleBackToTop}
          className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 bg-white text-black px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 15l7-7 7 7" 
            />
          </svg>
          Back to Top
        </button>
      )}

      {/* Page Content */}
      <div 
        className="w-full h-full transition-transform duration-500"
        style={{ 
          transform: `translateY(-${currentPage * 100}%)`,
        }}
        onClick={handlePageClick}
      >
        {pages.map((page, index) => (
          <div key={page.id} className="w-full h-screen">
            <page.component />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index; 