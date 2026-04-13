import React from 'react';
// Import all the separate sections you created
import Hero from '../Components/Hero'; 
import Services from '../Components/Services'; // The new grid version of Services
import WhySoundBeats from '../Components/WhySoundbeats'; // The pixel-perfect one we just fixed

const Home = () => {
  return (
    <>
      <Hero />
      <Services/>
      <WhySoundBeats/>
      
    </>
  );
};

export default Home;