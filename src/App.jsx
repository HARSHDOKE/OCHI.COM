import React from 'react';
import Navbar from './Components/navbar';
import LandingPage from './Components/landingpage';
import MarqueePage from './Components/Marquee';
import AboutPage from './Components/About';
import EyesPage from './Components/Eyes';
import FeaturedPage from './Components/Featured';


const App = () => {
  return (
    <>
      <div className="appmain">
        <Navbar/>
        <LandingPage/>
        <MarqueePage/>
        <AboutPage/>
        <EyesPage/>
        <FeaturedPage/>
      </div>
    </>
  )
}

export default App

