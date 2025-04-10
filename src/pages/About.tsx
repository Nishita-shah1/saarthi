
import React from 'react';
import { Layout } from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Heart, Phone, Map, Mail } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <motion.div 
        className="py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-saarthiBlue-800">
            {t('aboutTitle')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('aboutSubtitle')}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="bg-saarthiBlue-50 rounded-xl p-6 h-full">
              <h2 className="text-2xl font-semibold mb-4 text-saarthiBlue-800">{t('ourMission')}</h2>
              <p className="text-lg mb-4 text-gray-700">{t('missionDescription1')}</p>
              <p className="text-lg text-gray-700">{t('missionDescription2')}</p>
              
              <div className="mt-6 flex items-center text-saarthiBlue-600">
                <Heart className="h-6 w-6 mr-2" />
                <span className="text-lg font-medium">{t('withLove')}</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="rounded-xl overflow-hidden h-[300px] md:h-full bg-saarthiBlue-100"
          >
            <img 
              src="/placeholder.svg" 
              alt="Saarthi Team" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        
        <Separator className="my-10" />
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">{t('contactUs')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-soft p-6 text-center">
              <div className="bg-saarthiBlue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-saarthiBlue-600" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-800">{t('callUs')}</h3>
              <p className="text-saarthiBlue-600 font-medium">1800-XXX-XXXX</p>
              <p className="text-gray-600 mt-1">{t('tollFree')}</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-soft p-6 text-center">
              <div className="bg-saarthiBlue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-saarthiBlue-600" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-800">{t('emailUs')}</h3>
              <p className="text-saarthiBlue-600 font-medium">help@saarthi.org</p>
              <p className="text-gray-600 mt-1">{t('alwaysHere')}</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-soft p-6 text-center">
              <div className="bg-saarthiBlue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Map className="h-8 w-8 text-saarthiBlue-600" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-800">{t('visitUs')}</h3>
              <p className="text-saarthiBlue-600 font-medium">{t('headOffice')}</p>
              <p className="text-gray-600 mt-1">{t('newDelhi')}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default About;
