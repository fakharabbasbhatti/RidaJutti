import React from 'react'
import Navbar from '../component/PortfolioFirst/Navbar';
import HomeAndAbout from '../component/PortfolioFirst/HomeAndAbout';
import ProjectAndContact from '../component/PortfolioFirst/ProjectAndContact';
import Footer from '../component/PortfolioFirst/Footer';

const PortfolioFirst = () => {
  return (
    <div>
      <Navbar />
      <HomeAndAbout />
     <ProjectAndContact/>
     <Footer/>
    </div>
  )
}

export default PortfolioFirst;