import React from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-violet-500 to-purple-800">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              <Sparkles className="text-white/30 w-4 h-4" />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg border border-white/30 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-300 to-purple-500 flex items-center justify-center text-purple-900 font-bold text-2xl">
                IS
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-light mb-4 tracking-wide">
            Ishaan <span className="font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">Sahu</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-100 mb-6 font-light">
            Freelance Designer & Web Developer
          </p>
          
          <p className="text-lg text-purple-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            I build visually stunning and highly functional digital experiences 
            that blend creativity with cutting-edge technology. Let’s turn your vision into reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
       <a
  href="#projects"
  className="px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
>
  View My Work
</a>

            <a
  href="#contact"
  className="px-8 py-3 border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
>
  Get In Touch
</a>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;
