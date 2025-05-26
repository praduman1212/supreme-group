import React from 'react';
import MainPage from '../components/MainPage';
import Header from '../components/Header';
import PerformanceSection from '../components/PerformanceSection';
import GetInTouch from '../components/GetInTouch';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PerformanceSection />
      <MainPage />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Index;
