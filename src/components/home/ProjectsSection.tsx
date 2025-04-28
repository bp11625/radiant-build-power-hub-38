
import React from 'react';
import Heading from '@/components/ui/Heading';
import { useNavigate } from 'react-router-dom';

const ProjectsSection = () => {
  const navigate = useNavigate();

  const handleViewProject = (projectId: string) => {
    navigate(`/projects?project=${projectId}`);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Heading title="Recent Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <ProjectCard
            image="https://images.unsplash.com/photo-1621335223658-0ebd89004d51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            title="Luxury Villa"
            category="Residential Project"
            onClick={() => handleViewProject('luxury-villa')}
          />
          <ProjectCard
            image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            title="Office Tower"
            category="Commercial Project"
            onClick={() => handleViewProject('office-tower')}
          />
          <ProjectCard
            image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            title="Modern Apartment"
            category="Residential Project"
            onClick={() => handleViewProject('modern-apartment')}
          />
        </div>
        <div className="text-center mt-12">
          <a href="/projects">
            <button className="bg-[#1a3c6b] hover:bg-blue-800 text-white font-medium py-3 px-8 rounded transition-colors">
              View All Projects
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ image, title, category, onClick }: { image: string; title: string; category: string; onClick: () => void }) => (
  <div className="group rounded-lg overflow-hidden shadow-md">
    <div className="relative h-64 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <button 
          onClick={onClick}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
        >
          View Project
        </button>
      </div>
    </div>
    <div className="p-6 bg-white">
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{category}</p>
    </div>
  </div>
);

export default ProjectsSection;
