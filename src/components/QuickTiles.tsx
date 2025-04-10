
import React from 'react';
import { FileText, PhoneCall, Briefcase, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

interface QuickTileProps {
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
  delay: number;
}

const QuickTile: React.FC<QuickTileProps> = ({ icon, title, onClick, delay }) => {
  return (
    <motion.div 
      className="quick-tile bg-white hover:bg-saarthiBlue-50 hover:shadow-medium transform transition-all"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="text-4xl mb-2 text-saarthiBlue-500">{icon}</div>
      <p className="text-lg font-medium text-center">{title}</p>
    </motion.div>
  );
};

export const QuickTiles: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      <QuickTile 
        icon={<FileText />} 
        title={t('schemes')} 
        onClick={() => console.log('Schemes clicked')} 
        delay={0.1}
      />
      <QuickTile 
        icon={<PhoneCall />} 
        title={t('emergency')} 
        onClick={() => console.log('Emergency clicked')} 
        delay={0.2}
      />
      <QuickTile 
        icon={<Briefcase />} 
        title={t('jobs')} 
        onClick={() => console.log('Jobs clicked')} 
        delay={0.3}
      />
      <QuickTile 
        icon={<MessageCircle />} 
        title={t('volunteer')} 
        onClick={() => console.log('Talk to volunteer clicked')} 
        delay={0.4}
      />
    </div>
  );
};
