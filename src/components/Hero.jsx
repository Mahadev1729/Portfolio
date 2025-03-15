import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import myimage from '../assets/myimage.png'; // Ensure correct file extension

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative px-4 pt-16"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.1)_0%,transparent_100%)]"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="gradient-text text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Mahadev Athani
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up">
            AIML Student at University of Visvesvaraya College of Engineering
          </p>
          {/* Social Links */}
          <div className="flex gap-6 justify-center md:justify-start mb-12">
            <a
              href="https://github.com/Mahadev1729"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon group"
              aria-label="GitHub Profile"
            >
              <Github size={24} className="group-hover:scale-110 transition-transform duration-200" />
            </a>
            <a
              href="https://www.linkedin.com/in/mahadev-athani-6661b3288"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon group"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} className="group-hover:scale-110 transition-transform duration-200" />
            </a>
            <a
              href="mailto:mahadev.athani@university.edu"
              className="btn-icon group"
              aria-label="Email Contact"
            >
              <Mail size={24} className="group-hover:scale-110 transition-transform duration-200" />
            </a>
          </div>
          {/* Resume Button */}
          <a
            href="/resume.pdf" // Update with your actual resume link
            download
            className="btn animate-fade-in"
            style={{ animationDelay: '800ms' }}
          >
            Download Resume
          </a>
        </div>

        {/* Image Section */}
        <div
          className="w-full md:w-1/2 animate-fade-in animate-float"
          style={{ animationDelay: '300ms' }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <img
              src={myimage}
              alt="Professional portrait"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover mx-auto border-4 border-gray-800/50 shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 animate-bounce">
        <ChevronDown size={32} className="text-gray-400 animate-pulse" />
      </div>
    </section>
  );
}
