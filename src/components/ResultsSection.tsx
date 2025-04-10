
import React, { useState } from 'react';
import { Volume, RefreshCw, Download, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

interface ResultsSectionProps {
  query?: string;
  result?: string;
  isVisible: boolean;
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({
  query = "मुझे प्रधानमंत्री किसान सम्मान निधि योजना के बारे में बताइए",
  result = "प्रधानमंत्री किसान सम्मान निधि योजना एक केंद्रीय क्षेत्र की योजना है जिसके तहत पात्र किसान परिवारों को हर 4 महीने में 2,000 रुपये की तीन समान किस्तों में 6,000 रुपये प्रति वर्ष की आय सहायता प्रदान की जाती है।",
  isVisible = false,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { t } = useLanguage();

  const handlePlayAudio = () => {
    setIsPlaying(true);
    // Simulate audio playback
    setTimeout(() => {
      setIsPlaying(false);
    }, 3000);
  };

  if (!isVisible) return null;

  return (
    <motion.div 
      className="card-container my-8 max-w-3xl mx-auto bg-white rounded-xl shadow-soft overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="mb-6 p-6 pb-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="text-xl font-medium mb-2 text-saarthiBlue-700">{t('youAsked')}:</h3>
        <p className="text-lg p-3 bg-saarthiBlue-50 rounded-lg border border-saarthiBlue-100">{query}</p>
      </motion.div>
      
      <motion.div 
        className="p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className="text-xl font-medium mb-2 text-saarthiBlue-700">{t('answer')}:</h3>
        <div className="p-4 bg-saarthiBlue-50 rounded-lg border border-saarthiBlue-100">
          <p className="text-lg mb-4">{result}</p>
          
          <div className="flex flex-wrap gap-3 mt-6">
            <Button 
              variant="outline" 
              size="lg" 
              className={`text-lg flex items-center gap-2 hover:bg-saarthiBlue-100 transition-colors ${isPlaying ? 'bg-saarthiBlue-100' : ''}`} 
              onClick={handlePlayAudio}
            >
              <Volume size={20} />
              <span>{isPlaying ? t('playing') : t('listenAgain')}</span>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg flex items-center gap-2 hover:bg-saarthiBlue-100 transition-colors"
            >
              <RefreshCw size={20} />
              <span>{t('tellMore')}</span>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg flex items-center gap-2 hover:bg-saarthiBlue-100 transition-colors"
            >
              <Download size={20} />
              <span>{t('download')}</span>
            </Button>
            
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg flex items-center gap-2 hover:bg-saarthiAmber-400 transition-colors"
            >
              <MessageCircle size={20} />
              <span>{t('talkToVolunteer')}</span>
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
