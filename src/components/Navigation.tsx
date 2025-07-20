import React from 'react';
import { Home, Briefcase, User, Code, MessageSquare, Mail } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'projects', icon: Briefcase, label: 'Projects' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'skills', icon: Code, label: 'Skills' },
    { id: 'testimonials', icon: MessageSquare, label: 'Reviews' },
    { id: 'contact', icon: Mail, label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/80 backdrop-blur-lg rounded-full px-6 py-3 shadow-lg border border-white/50">
        <div className="flex items-center space-x-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative p-3 rounded-full transition-all duration-300 group ${
                  isActive 
                    ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                
                {/* Glow effect for active item */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full blur-lg opacity-30 -z-10"></div>
                )}
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {item.label}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;