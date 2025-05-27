import React, { useState } from 'react';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import FifthPage from './FifthPage';
import SixthPage from './SixthPage';
import SeventhPage from './SeventhPage';

const pages = [
  { id: 1, component: FirstPage },
  { id: 2, component: SecondPage },
  { id: 3, component: ThirdPage },
  { id: 4, component: FourthPage },
  { id: 5, component: FifthPage },
  { id: 6, component: SixthPage },
  { id: 7, component: SeventhPage },
];

const MainPage = () => {
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

      {/* Navigation Line */}
      <div className="absolute left-3 sm:left-2 md:left-4 lg:left-8 top-1/2 transform -translate-y-1/2 w-0.5 h-64 bg-gray-500 z-10" >
        <div 
          className="w-0.5 bg-white transition-all duration-500"
          style={{ 
            height: `${(currentPage / (pages.length - 1)) * 100}%`,
          }}
        />
      </div>

      {/* Previous Page Button */}
      {currentPage > 0 && (
        <button
          onClick={handlePreviousPage}
          className="absolute left-4 sm:left-2 md:left-5 lg:left-8 top-[calc(50%-11rem)] md:top-[calc(50%-12rem)] transform -translate-x-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
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
    </div>
  );
};

export default MainPage; 