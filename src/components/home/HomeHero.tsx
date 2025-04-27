
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HERO_VIDEOS = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4"
];

const HomeHero = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % HERO_VIDEOS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[600px] overflow-hidden">
      <div className="absolute inset-0 w-full h-full flex z-0">
        <div className="flex-1 h-full group relative overflow-hidden" style={{ minWidth: 0 }}>
          <video
            key={currentVideo}
            src={HERO_VIDEOS[currentVideo]}
            loop
            muted
            playsInline
            autoPlay
            className="w-full h-full object-cover video-float-0"
          />
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        </div>
      </div>

      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-start text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Building Excellence <br /> Since 1990
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          We provide high-quality construction services for residential and commercial properties
        </p>
        <div className="flex flex-wrap gap-4 mb-6">
          <Link to="/services">
            <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded transition-colors">
              Our Services
            </button>
          </Link>
          <Link to="/contact">
            <button className="bg-transparent hover:bg-white/10 border border-white text-white font-medium py-3 px-6 rounded transition-colors">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
