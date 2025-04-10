
import React from 'react';
import { VoiceButton } from './VoiceButton';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export const WelcomeSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <motion.div 
      className="text-center my-12 md:my-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1 
        className="text-3xl md:text-4xl font-bold mb-3 text-saarthiBlue-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {t('welcome')}
      </motion.h1>
      <motion.h2 
        className="text-2xl mb-8 text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {t('subtitle')}
      </motion.h2>
      
      <div className="max-w-md mx-auto p-4">
        <div className="flex flex-col items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <VoiceButton 
              size="lg"
              onResult={(transcript) => console.log(transcript)}
            />
          </motion.div>
          <motion.p 
            className="mt-6 text-xl text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {t('tapToAsk')}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};
