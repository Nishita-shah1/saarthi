import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LanguageSwitcher } from './LanguageSwitcher';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Book, HelpCircle, Home, Info, Menu, Users, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

export const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  
  const navItems = [
    { path: '/', label: t('home'), icon: <Home className="h-6 w-6" /> },
    { path: '/schemes', label: t('schemes'), icon: <Book className="h-6 w-6" /> },
    { path: '/help', label: t('help'), icon: <HelpCircle className="h-6 w-6" /> },
    { path: '/community', label: t('community'), icon: <Users className="h-6 w-6" /> },
    { path: '/about', label: t('about'), icon: <Info className="h-6 w-6" /> },
  ];

  // Senior-friendly color palette
  const colors = {
    primary: '#2E7D32', // High-contrast green
    secondary: '#F5F5F5', // Soft light background
    accent: '#FF9800', // Warm orange for important elements
    text: '#333333', // High-contrast dark text
    highlight: '#E8F5E9', // Light green for active states
  };

  return (
    <motion.nav 
      className={`sticky top-0 z-50 border-b ${isMenuOpen ? 'border-transparent' : 'border-gray-200'}`}
      style={{ backgroundColor: colors.secondary }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo with comforting bounce animation */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
            onClick={closeMenu}
          >
            <motion.span 
              className="text-3xl font-bold"
              style={{ color: colors.primary }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              
            सार्थी 
            </motion.span>
            <motion.span 
              className="text-xl font-semibold"
              style={{ color: colors.primary }}
              initial={{ opacity: 0.9 }}
              whileHover={{ opacity: 1 }}
            >
              Saarthi
            </motion.span>
          </Link>

          {/* Desktop Navigation - Larger buttons with clear hover states */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link 
                  to={item.path}
                  className={`flex items-center space-x-2 px-5 py-2.5 rounded-lg text-lg transition-all ${
                    location.pathname === item.path 
                      ? 'font-semibold shadow-sm'
                      : 'font-medium hover:bg-opacity-50'
                  }`}
                  style={{
                    backgroundColor: location.pathname === item.path ? colors.highlight : 'transparent',
                    color: location.pathname === item.path ? colors.primary : colors.text
                  }}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            
            {/* Emergency button - always visible */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="tel:100" 
                className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold"
                style={{ backgroundColor: colors.accent, color: 'white' }}
              >
                <Phone className="h-5 w-5" />
                <span className="hidden sm:inline">{t('emergency')}</span>
              </a>
            </motion.div>

            {/* Mobile menu button - extra large for easy tapping */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              className="md:hidden rounded-full p-2"
              style={{ backgroundColor: isMenuOpen ? colors.highlight : 'transparent' }}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <motion.div
                animate={isMenuOpen ? "open" : "closed"}
                variants={{
                  open: { rotate: 90 },
                  closed: { rotate: 0 }
                }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? (
                  <X className="h-7 w-7" style={{ color: colors.primary }} />
                ) : (
                  <Menu className="h-7 w-7" style={{ color: colors.text }} />
                )}
              </motion.div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Full screen for easy access */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 z-40 mt-16"
            style={{ backgroundColor: colors.secondary }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="container mx-auto py-6 px-6 flex flex-col gap-2"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <Link 
                    to={item.path}
                    className={`flex items-center space-x-4 px-6 py-4 rounded-xl text-xl transition-colors ${
                      location.pathname === item.path 
                        ? 'font-semibold' 
                        : 'font-medium'
                    }`}
                    style={{
                      backgroundColor: location.pathname === item.path ? colors.highlight : 'transparent',
                      color: location.pathname === item.path ? colors.primary : colors.text
                    }}
                    onClick={closeMenu}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </motion.div>
              ))}

              {/* Emergency button in mobile menu */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 + 0.1 }}
                className="mt-4"
              >
                <a 
                  href="tel:100" 
                  className="flex items-center justify-center space-x-3 px-6 py-4 rounded-xl text-xl font-semibold"
                  style={{ backgroundColor: colors.accent, color: 'white' }}
                >
                  <Phone className="h-6 w-6" />
                  <span>{t('emergency')}</span>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};