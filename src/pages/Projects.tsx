import React, { useState } from 'react';
import { Button } from "../components/ui/button";
import MainNavbar from "@/components/layout/MainNavbar";

// Generate 50 projects with different tags
const generateProjects = () => {
  const tags = ['Commercial', 'Residential', 'Industrial', 'Infrastructure', 'Renovation', 
                'Sustainable', 'Healthcare', 'Education', 'Hospitality', 'Government'];
  
  const projects = [];
  for (let i = 1; i <= 50; i++) {
    // Assign 1-3 random tags to each project
    const projectTags = [];
    const numTags = Math.floor(Math.random() * 3) + 1;
    for (let j = 0; j < numTags; j++) {
      const randomTag = tags[Math.floor(Math.random() * tags.length)];
      if (!projectTags.includes(randomTag)) {
        projectTags.push(randomTag);
      }
    }
    
    projects.push({
      id: i,
      title: `Project ${i}`,
      description: `This is a ${projectTags.join(', ').toLowerCase()} project showcasing our expertise in construction.`,
      image: `https://picsum.photos/seed/${i}/800/600`,
      tags: projectTags,
      location: `Location ${i}`,
      year: 2020 + (i % 5)
    });
  }
  
  return projects;
};

const allProjects = generateProjects();

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState('All');
  const projectsPerPage = 10;
  
  // Get all unique tags
  const allTags = ['All', ...new Set(allProjects.flatMap(project => project.tags))];
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.tags.includes(activeFilter));
  
  // Get current projects
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  
  // Calculate total pages
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  
  // Handle page navigation
  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };
  
  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <MainNavbar />
      <div className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl max-w-2xl opacity-90">
            Explore our diverse portfolio of construction projects spanning various sectors and locations.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="mb-10 overflow-x-auto">
          <div className="flex flex-nowrap space-x-2 pb-2 min-w-full">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => {
                  setActiveFilter(tag);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeFilter === tag
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        
        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{project.location}</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center">
            <div className="flex items-center space-x-1">
              <Button
                variant="outline"
                onClick={() => goToPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              
              <div className="hidden sm:flex space-x-1">
                {pageNumbers.map(number => (
                  <Button
                    key={number}
                    variant={currentPage === number ? "default" : "outline"}
                    onClick={() => goToPage(number)}
                    className={currentPage === number ? "bg-blue-600" : ""}
                  >
                    {number}
                  </Button>
                ))}
              </div>
              
              <div className="sm:hidden">
                <span className="px-3 py-2 text-sm">
                  Page {currentPage} of {totalPages}
                </span>
              </div>
              
              <Button
                variant="outline"
                onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          </div>
        )}
        
        {/* Project count */}
        <div className="mt-6 text-center text-gray-500">
          Showing {indexOfFirstProject + 1}-{Math.min(indexOfLastProject, filteredProjects.length)} of {filteredProjects.length} projects
        </div>
      </div>
    </div>
  );
};

export default Projects;
