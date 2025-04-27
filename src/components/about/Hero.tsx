
import React, { useState } from 'react';
import { Button } from "../ui/button";

const videoData = [
  {
    id: 1,
    title: "Construction Management",
    videoUrl: "https://player.vimeo.com/external/439548061.sd.mp4?s=7e9f901b686e9682cc096d5b0188473c622d1ca3&profile_id=164&oauth2_token_id=57447761",
  },
  {
    id: 2,
    title: "Architecture & Design",
    videoUrl: "https://player.vimeo.com/external/459377653.sd.mp4?s=96ba4e9a00a81d23c2c2c40d74fc805c285c7898&profile_id=164&oauth2_token_id=57447761",
  },
  {
    id: 3,
    title: "Renovation Projects",
    videoUrl: "https://player.vimeo.com/external/371912380.sd.mp4?s=5ca988c0a33f70910fa7e7072f2601452662a07e&profile_id=164&oauth2_token_id=57447761",
  },
  {
    id: 4,
    title: "Safety & Compliance",
    videoUrl: "https://player.vimeo.com/external/427653755.sd.mp4?s=f4da4dacfa64b58d365b4908ada697e5a6e622af&profile_id=164&oauth2_token_id=57447761",
  },
];

const Hero = () => {
  const [activeVideo, setActiveVideo] = useState<null | number>(null);

  return (
    <div className="relative">
      {/* Hero background */}
      <div className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/6d21e0ac-3d27-47ba-9046-ccde539ce977.png"
            alt="Construction site"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Video overlay (shown only on hover) */}
        {activeVideo !== null && (
          <div className="absolute inset-0 z-20 bg-black/80 flex items-center justify-center">
            <video
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
              onMouseLeave={() => setActiveVideo(null)}
            >
              <source src={videoData[activeVideo].videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button 
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2"
              onClick={() => setActiveVideo(null)}
            >
              ✕
            </button>
          </div>
        )}
        
        {/* Hero content */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Building <span className="text-blue-400">Excellence</span>,<br />
                Delivering <span className="text-blue-400">Quality</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                For over two decades, we've been at the forefront of construction innovation, 
                delivering exceptional results for our clients across commercial, residential, 
                and industrial projects.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg">Our Projects</Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Video thumbnails section */}
      <div className="container mx-auto px-4 py-8 -mt-16 relative z-30">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-8 text-blue-600">
            <span className="relative pb-2">
              Our Expertise
              <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500"></span>
            </span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoData.map((video, index) => (
              <div 
                key={video.id}
                className="relative rounded-lg overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                onMouseEnter={() => setActiveVideo(index)}
              >
                <div className="aspect-video bg-gray-200 relative">
                  <img 
                    src={`https://picsum.photos/seed/${video.id}/800/450`} 
                    alt={video.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 flex items-center justify-center transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-lg">{video.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">Hover to view video</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
