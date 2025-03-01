import React from "react";


const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6">
      
      <nav className="absolute top-6 right-6 flex gap-6 text-gray-400 text-sm">
        <a href="#home" className="hover:text-white">Home</a>
        <a href="#resume" className="hover:text-white">Resume</a>
        <a href="#works" className="hover:text-white">Works</a>
        <a href="#blog" className="hover:text-white">Blog</a>
        <a href="#contact" className="hover:text-white">Contact</a>
      </nav>
      
      {/* Hero Section */}
      <div className="text-center max-w-3xl">
        <div className="relative inline-block mb-6">
          <img src="src\assets\myimage.jpg" alt="Profile" className="w-48 h-48 rounded-lg grayscale" />
        </div>
        
        <h1 className="text-4xl font-bold">
          Hello, I am <span className="text-green-500">Mahadev Athani</span>
        </h1>
        <p className="text-gray-400 mt-2">
          UX/UI Designer and Front-end Developer Based in San Francisco.
        </p>
        
        <h2 className="text-5xl font-bold mt-6">
          I code cool <span className="text-green-500">web</span>
        </h2>
      </div>
      
   
      <div className="absolute bottom-6 left-6 text-gray-400 text-sm">
        <p>Email: <a href="mailto:alejandrao@gmail.com" className="text-white">alejandrao@gmail.com</a></p>
        <p>Phone: +1 (234) 567 80 98</p>
      </div>
    </div>
  );
};

export default Home;
