
import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Education from './components/Education';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Hackathons from './components/Hackathons.tsx';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white relative">
      <div className="relative z-10">
        <Navbar />
        {/* <Hero />
        <Education />
        <Skills />
        <Projects />
        <Hackathons />
        <Contact />
        <Footer /> */}
      </div>
    </div>
  );
}

export default App;
