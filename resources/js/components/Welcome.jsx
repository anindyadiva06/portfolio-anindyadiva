import React, { useEffect, useState, useRef } from 'react';
import PortfolioApp from './PortfolioApp';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Welcome = () => {
  const [showMain, setShowMain] = useState(false);
  const [text, setText] = useState('');
  const fullText = 'Weelcome To My Portfolio Website';
  const typingStarted = useRef(false); 

  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });

    if (typingStarted.current) return;
    typingStarted.current = true;

    let index = 0;
    const typeChar = () => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index));
        index++;
        setTimeout(typeChar, 80);
      }
    };

    typeChar();
  }, []);

  if (showMain) return <PortfolioApp />;

  return (
    <div className="relative w-screen h-screen overflow-hidden flex items-center justify-center bg-gradient-to-bl from-white via-primary to-secondary">
      {/* Welcome */}
      <div className="text-center pb-2 z-10" data-aos="zoom-in">
        <h1 className="text-4xl md:text-6xl font-bold leading-normal text-transparent bg-clip-text bg-gradient-to-r from-deep via-accent to-secondary min-h-[5rem]">
          {text}
        </h1>
       <h1 className="text-xl md:text-3xl italic text-transparent bg-clip-text bg-gradient-to-r from-deep via-accent to-secondary min-h-[5rem]">
          Get to know my projects and background by clicking the button below!
        </h1>
        <button
          onClick={() => setShowMain(true)}
          className="mt-4 px-20 py-3 bg-gradient-to-r from-deep via-accent to-secondary text-white rounded-full hover:opacity-90 transition-all duration-300"
        >
          Find Out More
        </button>
      </div>

      {/* Wave */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1425 205.55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="M0,17.27l23.75,5.09C47.5,27.38,95,37.57,142.5,39.47s95-4.36,142.5-10.28,95-11.35,142.5-7.4,95,17.43,142.5,24,95,6.25,142.5,5.83,95-.9,142.5-3S950,43,997.5,42.92s95,3.12,142.5,2.88,95-4.11,142.5-3.62,95,5.51,118.75,8L1425,52.62v170.2H0Z"
            fill="#ECD4EA" // primary
          />
          <path
            d="M0,94.56l23.75-6.17C47.5,82.22,95,69.89,142.5,65.2s95-1.64,142.5,4.85S380,86.33,427.5,86.5,522.5,77,570,73.59s95-.66,142.5,1.81,95,4.6,142.5,3.78,95-4.6,142.5-6.58,95-1.89,142.5,1.24,95,9.45,142.5,13.15,95,4.85,118.75,5.35l23.75.57V222.82H0Z"
            fill="#A987A8" // secondary
          />
          <path
            d="M0,134,23.75,132C47.5,129.91,95,125.8,142.5,125.39s95,2.88,142.5,5.75,95,5.35,142.5,4,95-6.58,142.5-8.06,95,.66,142.5-.41,95-5.51,142.5-9.21,95-6.66,142.5-5.83,95,5.42,142.5,9.86,95,8.47,142.5,9.05,95-2.47,118.75-4L1425,125v97.84H0Z"
            fill="#693B69" // accent
          />
          <path
            d="M0,178.42l23.75-1.64c23.75-1.65,71.25-4.94,118.75-5.59s95,1.23,142.5,2.71,95,2.63,142.5,4.11,95,3.45,142.5,2.88,95-3.54,142.5-8.8,95-12.58,142.5-13.57,95,4.53,142.5,8.23,95,5.67,142.5,4,95-6.91,142.5-9.79,95-3.37,118.75-3.7L1425,157v65.78H0Z"
            fill="#511F52" // deep
          />
        </g>
      </svg>
    </div>
  );
};

export default Welcome;
