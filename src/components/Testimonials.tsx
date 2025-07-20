import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
   {
  name: "Ishaan Sahu",
  role: "Freelancer",
  avatar: "",
  content: "Ishaan's design expertise transformed our entire brand identity. His attention to detail and creative vision exceeded all expectations.",
  rating: 5,
  company: "TechVision"
}

  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 px-6 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            Client <span className="font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">Love</span>
          </h2>
          <p className="text-xl text-gray-600">
            What my clients say about working together
          </p>
        </div>

        <div className="relative">
          <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-lg border border-white/50">
            <div className="flex items-center justify-between mb-8">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 bg-purple-100 hover:bg-purple-200 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6 text-purple-600" />
              </button>

              <div className="flex-1 mx-8">
                <div className="text-center mb-6">
                  <Quote className="w-12 h-12 text-purple-300 mx-auto mb-4" />
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonials[currentTestimonial].content}"
                  </p>
                  
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <img 
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-purple-200"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-800">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-purple-600 text-sm">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>
              </div>

              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 bg-purple-100 hover:bg-purple-200 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6 text-purple-600" />
              </button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentTestimonial 
                      ? 'bg-purple-600' 
                      : 'bg-purple-200 hover:bg-purple-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;