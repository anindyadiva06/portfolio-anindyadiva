import React, { useState, useEffect } from 'react';
import HomeSection from './sections/Home';
import PortoSection from './sections/Porto';
import ExperienceSection from './sections/Experience';
import ContactSection from './sections/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NAVBAR_HEIGHT = 80;

const PortfolioApp = () => {
  const [portoTab, setPortoTab] = useState('Projects');

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    });
  }, []);

  const handleNavClick = (id) => {
    const target = document.getElementById(id);
    if (target) {
      const yOffset = -NAVBAR_HEIGHT;
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });

      setTimeout(() => {
        AOS.refreshHard();
      }, 300);
    }
  };

  return (
    <div className="scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-secondary via-primary/90 backdrop-blur-md z-50 shadow">
        <ul className="flex justify-center gap-8 py-4 text-sm md:text-lg">
          {['home', 'portfolio', 'experiences', 'contact'].map((id) => (
            <li key={id}>
              <button
                onClick={() => handleNavClick(id)}
                className="hover:text-deep font-normal capitalize text-white transition-colors duration-300"
              >
                {id}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sections */}
      <main className="pt-24 space-y-32 px-4 md:px-10 lg:px-20 text-deep font-poppins bg-white">
        <section id="home" data-aos="fade-up">
          <HomeSection />
        </section>

        <section id="portfolio" data-aos="fade-up" className="text-center space-y-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-deep to-primary leading-tight m-0">
            Portfolio
          </h1>
           <p className="text-base lg:text-base font-normal text-deep max-w-2xl mx-auto">
            To enhance and refine my skills in the field of IT, especially in web development, UI/UX design, and data analytics, I have built several projects and taken courses, which are showcased below.
          </p>
          <PortoSection portoTab={portoTab} setPortoTab={setPortoTab} />
        </section>

        <section id="experiences" data-aos="fade-up" className="text-center space-y-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-primary to-deep leading-tight m-0">
            Experiences
          </h1>
           <p className="text-base lg:text-base font-normal text-deep max-w-2xl mx-auto">
            I actively developed both technical and soft skills during university through internships in IT and involvement in student organizations, focusing on leadership, communication, and teamwork.
          </p>
          <ExperienceSection />
        </section>

        <section id="contact" data-aos="fade-up" className="text-center space-y-12 pb-32">
          <h1 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-deep to-primary leading-tight m-0">
            Contact
          </h1>
          <p className="text-base lg:text-base font-normal text-deep max-w-2xl mx-auto">
            Let’s connect! I welcome the opportunity to engage and explore potential collaborations or discussions. Please feel free to reach out.
          </p>
          < ContactSection />
        </section>
      </main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-secondary via-primary backdrop-blur-md shadow text-white py-9">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
            
            {/* Tentang */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Anindya Diva Talitha</h3>
              <p className="text-base">
              Informatics Engineering - Jenderal Soedirman University
              </p>
            </div>

            {/* Navigasi */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Menu</h3>
              <ul className="text-base space-y-1">
                <li><a href="#home" className="hover:underline">Home</a></li>
                <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
                <li><a href="#experiences" className="hover:underline">Experiences</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
              </ul>
            </div>

            {/* Sosial Media */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Connect with me</h3>
              <div className="flex flex-col gap-3 mt-2">
                
                {/* Email */}
                <a href="mailto:anindyadiva99@gmail.com" className="flex items-center gap-3 hover:underline">
                  <img src="/images/gmail.png" alt="Email" className="w-6 h-6 hover:opacity-75 transition-opacity" />
                  <p className="text-base">anindyadiva99@gmail.com</p>
                </a>

                {/* Instagram */}
                <a href="https://instagram.com/talithadivaa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:underline">
                  <img src="/images/instagram.png" alt="Instagram" className="w-6 h-6 hover:opacity-75 transition-opacity" />
                  <p className="text-base">talithadivaa</p>
                </a>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/anindyadivatalitha" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:underline">
                  <img src="/images/linkedin.png" alt="LinkedIn" className="w-6 h-6 hover:opacity-75 transition-opacity" />
                  <p className="text-base">Anindya Diva Talitha</p>
                </a>

                {/* GitHub */}
                <a href="https://github.com/anindyadiva06" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:underline">
                  <img src="/images/github.png" alt="GitHub" className="w-6 h-6 hover:opacity-75 transition-opacity" />
                  <p className="text-base">anindyadiva06</p>
                </a>

              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-10 text-center text-base border-t border-white/30 pt-4">
            © {new Date().getFullYear()} Anindya Diva Talitha. All rights reserved.
          </div>
        </footer>
      </div>
  );
};

export default PortfolioApp;
