import React from 'react';
import { FileText, PhoneCall, Briefcase, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

interface QuickTileProps {
  icon: React.ReactNode;
  title: string;
  path: string;
  delay: number;
  color: string;
}

const QuickTile: React.FC<QuickTileProps> = ({ icon, title, path, delay, color }) => {
  const navigate = useNavigate();
  
  return (
    <motion.div
      className={`quick-tile bg-white hover:shadow-lg rounded-xl p-6 cursor-pointer`}
      onClick={() => navigate(path)}
      initial={{ opacity: 0, y: 40, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay
      }}
      whileHover={{ 
        y: -8,
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className={`w-16 h-16 rounded-full ${color} flex items-center justify-center mb-4 mx-auto`}
        initial={{ rotate: -15, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ delay: delay + 0.1, type: "spring" }}
      >
        <div className="text-white text-2xl">
          {icon}
        </div>
      </motion.div>
      <motion.p 
        className="text-lg font-semibold text-center text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.3 }}
      >
        {title}
      </motion.p>
      <motion.div
        className="w-0 h-1 bg-saarthiBlue-400 mt-3 mx-auto"
        initial={{ width: 0 }}
        whileHover={{ width: "50%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export const QuickTiles: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <motion.h2 
        className="text-3xl font-bold text-center mb-12 text-saarthiBlue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t('how_can_we_help')}
      </motion.h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <AnimatePresence>
          <QuickTile 
            icon={<FileText />} 
            title={t('schemes')} 
            path="/schemes"
            delay={0.1}
            color="bg-saarthiBlue-500"
          />
          <QuickTile 
            icon={<PhoneCall />} 
            title={t('emergency')} 
            path="/help"
            delay={0.2}
            color="bg-red-500"
          />
          <QuickTile 
            icon={<Briefcase />} 
            title={t('jobs')} 
            path="/community"
            delay={0.3}
            color="bg-green-500"
          />
          <QuickTile 
            icon={<MessageCircle />} 
            title={t('volunteer')} 
            path="/about"
            delay={0.4}
            color="bg-purple-500"
          />
        </AnimatePresence>
      </div>

      <motion.div 
        className="text-center mt-12 text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
       <span>{t('pleaseselect')}</span>
      </motion.div>
    </div>
  );
};