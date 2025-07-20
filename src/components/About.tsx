import React from 'react';
import { Award, Users, Coffee, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: "Years Experience", value: "2+" },
    { icon: Users, label: "Happy Clients", value: "10+" },
    { icon: Coffee, label: "Projects Completed", value: "10+" },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              About <span className="font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">Me</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                I'm a passionate creative director and digital artist with over 8 years of experience 
                crafting extraordinary digital experiences. My journey began with a simple curiosity 
                about how beautiful interfaces come to life.
              </p>
              
              <p>
                Today, I specialize in creating innovative solutions that bridge the gap between 
                aesthetic excellence and functional design. From concept to completion, I ensure 
                every project tells a compelling story through thoughtful design and cutting-edge technology.
              </p>
              
              <p>
                When I'm not designing, you'll find me exploring new creative territories, 
                mentoring aspiring designers, or experimenting with the latest design trends 
                and technologies.
              </p>
            </div>

            <div className="mt-8">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Download Resume
              </button>
            </div>
          </div>

          {/* Profile Image & Stats */}
          <div className="relative">
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-6 bg-white/70 backdrop-blur-lg rounded-xl border border-white/50 hover:shadow-lg transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;