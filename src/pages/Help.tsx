
import React from 'react';
import { Layout } from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Phone, Headphones, MessageSquare, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Help = () => {
  const { t } = useLanguage();

  const emergencyContacts = [
    { icon: <Phone className="h-5 w-5" />, title: t('emergencyHelpline'), number: '112', color: 'text-red-500' },
    { icon: <Phone className="h-5 w-5" />, title: t('medicalEmergency'), number: '108', color: 'text-saarthiGreen-600' },
    { icon: <Phone className="h-5 w-5" />, title: t('womenHelpline'), number: '1091', color: 'text-pink-500' },
    { icon: <Phone className="h-5 w-5" />, title: t('childHelpline'), number: '1098', color: 'text-saarthiAmber-500' },
  ];

  return (
    <Layout>
      <motion.div 
        className="py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="bg-saarthiBlue-50 rounded-xl p-6 md:p-8 mb-8 border border-saarthiBlue-100"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-3xl font-bold mb-4 text-saarthiBlue-800">{t('helpTitle')}</h1>
          <p className="text-lg text-gray-700 mb-6">{t('helpDescription')}</p>
          
          <div className="flex flex-wrap gap-4">
            <Button className="bg-saarthiBlue-600 hover:bg-saarthiBlue-700">
              <Headphones className="h-5 w-5 mr-2" />
              {t('callVolunteer')}
            </Button>
            <Button variant="outline" className="border-saarthiBlue-200 text-saarthiBlue-700">
              <MessageSquare className="h-5 w-5 mr-2" />
              {t('chatVolunteer')}
            </Button>
          </div>
        </motion.div>
        
        <Separator className="my-8" />
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">{t('emergencyContacts')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {emergencyContacts.map((contact, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-soft p-5 flex items-center"
                whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
              >
                <div className={`p-3 rounded-full bg-gray-100 mr-4 ${contact.color}`}>
                  {contact.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">{contact.title}</h3>
                  <p className="text-2xl font-bold text-saarthiBlue-600">{contact.number}</p>
                </div>
                <Button size="icon" variant="ghost" className="ml-auto">
                  <Phone className="h-5 w-5" />
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-red-50 border border-red-200 rounded-xl p-6 mt-8 flex items-start gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="bg-red-100 p-2 rounded-full text-red-600 mt-1">
            <AlertTriangle className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-red-700 mb-2">{t('emergencyAlert')}</h3>
            <p className="text-red-600">{t('emergencyDescription')}</p>
          </div>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default Help;
