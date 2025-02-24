import { motion } from 'framer-motion';
import { Home, User, Shield, Award, Send } from 'lucide-react';
import React, { memo } from 'react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation = memo(function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const navItems = [
    { 
      icon: Home, 
      label: 'Home', 
      color: '#00ff88' 
    },
    { 
      icon: User, 
      label: 'About', 
      color: '#00ffcc' 
    },
    { 
      icon: Shield, 
      label: 'Certifications', 
      color: '#ff00ff' 
    },
    { 
      icon: Award, 
      label: 'Achievements', 
      color: '#ff6b00' 
    },
    { 
      icon: Send, 
      label: 'Contact', 
      color: '#00ff88' 
    }
  ];

  return (
    <motion.nav 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        type: "tween", 
        duration: 0.3,
        ease: "easeOut"
      }}
      className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50 mb-8 w-auto"
    >
      <div className="bg-black/70 backdrop-blur-lg rounded-full p-2 sm:p-3 border border-[#00ff88]/20 shadow-[0_0_20px_rgba(0,255,136,0.3)] mx-auto">
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          {navItems.map(({ icon: Icon, label, color }) => (
            <motion.button
              key={label}
              onClick={() => onSectionChange(label)}
              whileTap={{ scale: 0.9 }}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              className="relative group"
            >
              <motion.div 
                className="absolute -inset-1 rounded-full opacity-0 blur-sm group-hover:opacity-30 transition-all duration-300"
                style={{ backgroundColor: color }}
              />
              <div 
                className={`relative p-2 sm:p-3 bg-transparent rounded-full border border-[#00ff88]/30 hover:border-[#00ff88]/60 transition-all duration-300 
                  ${activeSection === label ? 'border-[#00ff88]' : ''}`}
              >
                <Icon 
                  size={16} 
                  className={`
                    transition-colors duration-300
                    sm:w-5 sm:h-5
                    ${activeSection === label ? 'text-white' : 'text-[#00ff88] group-hover:text-white'}
                  `}
                />
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
});

export default Navigation;