import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "YourPlaces Social Platform",
      description: "A beautiful social platform for sharing favorite places with an intuitive user interface and seamless user experience.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      image: "/images/projects/photo_2025-07-20_03-17-13.jpg",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "StreamVault Media Hub", 
      description: "A premium streaming platform with advanced content discovery, personalized recommendations, and stunning visual design.",
      tech: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      image: "/images/projects/photo_2025-07-20_03-17-28.jpg",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      id: 3,
      title: "Cold Email Automation System",
      description: "An end-to-end email automation platform with smart workflows, personalized outreach, and advanced analytics.",
      tech: ["n8n", "Google Sheets", "JavaScript", "Webhooks"],
      image: "/images/projects/photo_2025-07-20_03-17-33.jpg",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      id: 4,
      title: "HealthTech Services Platform",
      description: "A comprehensive healthcare platform offering disease prediction, insurance calculations, and health-related content.",
      tech: ["React", "Python", "Machine Learning", "PostgreSQL"],
      image: "/images/projects/photo_2025-07-20_03-17-21.jpg",
      gradient: "from-teal-500 to-blue-600"
    },
    {
      id: 5,
      title: "AWS Data Pipeline",
      description: "Scalable data processing pipeline for CSV uploads to PostgreSQL using AWS Lambda, SQS, and S3 with event-driven architecture.",
      tech: ["AWS Lambda", "PostgreSQL", "SQS", "S3"],
      image: "/images/projects/photo_2025-07-20_15-06-05.jpg",
      gradient: "from-orange-500 to-red-600"
    },
  
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            Featured <span className="font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of my most impactful work, showcasing innovation and technical excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white/70 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-purple-200 transform hover:-translate-y-2"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <button className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors duration-200 font-medium">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200">
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;