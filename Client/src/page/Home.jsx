import React from 'react'
import Navbar from './../component/Navbar';
import JobImage from '../assets/Jobpage.jpg';
import HomgeBg from '../assets/HomeBackground.webp'
import Footer from './../component/Footer';


const Home = () => {
  return (
    <div>
      <Navbar />
      <img src={HomgeBg} alt="Job Banner" className="w-full h-[500px]" />
      <Footer/>

    </div>
  )
}

export default Home
