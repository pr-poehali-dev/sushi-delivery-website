
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import PopularItems from '@/components/PopularItems';
import Advantages from '@/components/Advantages';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Categories />
        <PopularItems />
        <Advantages />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
