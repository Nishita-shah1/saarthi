
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LanguageSwitcher } from './LanguageSwitcher';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Book, HelpCircle, Home, Info, Menu, Users, X } from 'lucide-react';
import { Button } from './ui/button';

export const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navItems = [
    { path: '/', label: t('home'), icon: <Home className="h-5 w-5" /> },
    { path: '/schemes', label: t('schemes'), icon: <Book className="h-5 w-5" /> },
    { path: '/help', label: t('help'), icon: <HelpCircle className="h-5 w-5" /> },
    { path: '/community', label: t('community'), icon: <Users className="h-5 w-5" /> },
    { path: '/about', label: t('about'), icon: <Info className="h-5 w-5" /> },
  ];

  return (
    <motion.nav 
      className="bg-white shadow-sm py-3 px-4 sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <motion.span 
            className="text-2xl font-bold text-saarthiBlue-500"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            साथी
          </motion.span>
          <span className="text-saarthiBlue-500">Saarthi</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                location.pathname === item.path 
                  ? 'bg-saarthiBlue-50 text-saarthiBlue-700 font-medium' 
                  : 'text-gray-600 hover:text-saarthiBlue-600 hover:bg-saarthiBlue-50'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            className="md:hidden"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="container mx-auto py-2 px-4 flex flex-col">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-md ${
                  location.pathname === item.path 
                    ? 'bg-saarthiBlue-50 text-saarthiBlue-700 font-medium' 
                    : 'text-gray-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                <span className="text-lg">{item.label}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};
