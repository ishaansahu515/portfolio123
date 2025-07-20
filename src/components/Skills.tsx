import React from 'react';
import { Palette, Code, Smartphone, Globe, Database, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Palette,
      title: "Design",
      skills: [
        { name: "UI/UX Design", level: 95 },
        { name: "Figma", level: 90 },
        { name: "Adobe Creative Suite", level: 85 },
        { name: "Prototyping", level: 88 }
      ]
    },
    {
      icon: Code,
      title: "Frontend",
      skills: [
        { name: "React.js", level: 92 },
        { name: "TypeScript", level: 88 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Next.js", level: 85 },
         { name: "Javascript", level: 92 },
      ]
    },
    {
      icon: Database,
      title: "Backend",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 78 },
        { name: "Firebase", level: 82 },
         { name: "Java", level: 92 },
                 { name: "Spring Boot", level: 85 },

      ]
    }
  ];

  const tools = [
    { icon: Smartphone, name: "Mobile Design" },
    { icon: Globe, name: "Web Development" },
    { icon: Zap, name: "Performance" },
    { icon: Palette, name: "Brand Identity" }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            My <span className="font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for creating exceptional digital experiences
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-purple-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-violet-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Specialties */}
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 border border-white/50 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Tools & Specialties</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <tool.icon className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <span className="text-gray-700 font-medium">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;