
import React, { useState, useEffect } from 'react';

const HERO_CONTENT = [
  {
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    text: "Building Excellence Through Innovation"
  },
  {
    video: "https://www.w3schools.com/html/movie.mp4",
    text: "Creating Sustainable Solutions"
  },
  {
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    text: "Transforming Vision Into Reality"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_CONTENT.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[600px] overflow-hidden">
      <div className="absolute inset-0 w-full h-full flex z-0">
        <div className="flex-1 h-full relative overflow-hidden">
          <video
            key={currentSlide}
            src={HERO_CONTENT[currentSlide].video}
            loop
            muted
            playsInline
            autoPlay
            className="w-full h-full object-cover video-float-0"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>

      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
        <h1 
          key={currentSlide}
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-center animate-fade-in"
        >
          {HERO_CONTENT[currentSlide].text}
        </h1>
      </div>
    </section>
  );
};

export default Hero;
