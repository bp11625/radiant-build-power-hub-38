
import React, { useState, useEffect } from 'react';

const HERO_VIDEOS = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4"
];

const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % HERO_VIDEOS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full flex z-0">
        <div className="flex-1 h-full relative overflow-hidden">
          <video
            key={currentVideo}
            src={HERO_VIDEOS[currentVideo]}
            loop
            muted
            playsInline
            autoPlay
            className="w-full h-full object-cover video-float-0"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center">
          Building Excellence Through Innovation
        </h1>
      </div>
    </section>
  );
};

export default Hero;
