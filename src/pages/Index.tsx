
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { WelcomeSection } from '@/components/WelcomeSection';
import { QuickTiles } from '@/components/QuickTiles';
import { ResultsSection } from '@/components/ResultsSection';
import { Separator } from '@/components/ui/separator';
import { AdminDashboard } from '@/components/Dashboard';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const Index = () => {
  const [showResults, setShowResults] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const { t } = useLanguage();
  
  const toggleDashboard = () => {
    setShowDashboard(!showDashboard);
  };

  // Simulate receiving a result after voice input
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowResults(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <WelcomeSection />
      
      <QuickTiles />
      
      <ResultsSection isVisible={showResults} />
      
      <Separator className="my-8" />
      
      <div className="text-center mb-8">
        <motion.button
          onClick={toggleDashboard}
          className="text-saarthiBlue-600 underline text-lg hover:text-saarthiBlue-800 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showDashboard ? t('hideDashboard') : t('showDashboard')}
        </motion.button>
      </div>
      
      {showDashboard && <AdminDashboard />}
    </Layout>
  );
};

export default Index;
