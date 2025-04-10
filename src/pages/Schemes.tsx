
import React from 'react';
import { Layout } from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { FileText, Users, Briefcase, Heart, Home as HomeIcon, Leaf } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const SchemeCard = ({ icon, title, description, color }) => (
  <motion.div 
    className={`p-6 rounded-xl shadow-soft ${color} text-white`}
    whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-start space-x-4">
      <div className="bg-white/20 p-3 rounded-lg">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="opacity-90">{description}</p>
      </div>
    </div>
  </motion.div>
);

const Schemes = () => {
  const { t } = useLanguage();

  const schemes = [
    {
      icon: <HomeIcon className="h-6 w-6" />,
      title: t('pmayScheme'),
      description: t('pmayDescription'),
      color: 'bg-saarthiBlue-600'
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: t('pmjayScheme'),
      description: t('pmjayDescription'),
      color: 'bg-saarthiAmber-500'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: t('pensionScheme'),
      description: t('pensionDescription'),
      color: 'bg-saarthiGreen-600'
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: t('skillScheme'),
      description: t('skillDescription'),
      color: 'bg-saarthiBlue-500'
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: t('kccScheme'),
      description: t('kccDescription'),
      color: 'bg-saarthiGreen-500'
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: t('scholarshipScheme'),
      description: t('scholarshipDescription'),
      color: 'bg-saarthiAmber-600'
    },
  ];

  return (
    <Layout>
      <motion.div 
        className="py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="text-3xl md:text-4xl font-bold mb-3 text-saarthiBlue-800 text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {t('schemesTitle')}
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600 mb-8 text-center max-w-2xl mx-auto"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {t('schemesSubtitle')}
        </motion.p>

        <Separator className="my-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {schemes.map((scheme, index) => (
            <SchemeCard 
              key={index}
              icon={scheme.icon}
              title={scheme.title}
              description={scheme.description}
              color={scheme.color}
            />
          ))}
        </div>
      </motion.div>
    </Layout>
  );
};

export default Schemes;
