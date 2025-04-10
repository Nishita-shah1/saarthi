
import React from 'react';
import { Layout } from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Users, Calendar, MapPin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const EventCard = ({ title, date, location, attendees, category }) => {
  const { t } = useLanguage();
  
  const categoryColors = {
    health: 'bg-saarthiGreen-100 text-saarthiGreen-800 border-saarthiGreen-200',
    social: 'bg-saarthiBlue-100 text-saarthiBlue-800 border-saarthiBlue-200',
    education: 'bg-saarthiAmber-100 text-saarthiAmber-800 border-saarthiAmber-200',
  };

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-soft p-6 hover:shadow-medium transition-all"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <span className={`px-3 py-1 rounded-full text-sm border ${categoryColors[category]}`}>
          {category}
        </span>
      </div>
      
      <div className="space-y-3 mb-5">
        <div className="flex items-center text-gray-600">
          <Calendar className="h-4 w-4 mr-2 text-saarthiBlue-500" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <MapPin className="h-4 w-4 mr-2 text-saarthiBlue-500" />
          <span>{location}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Users className="h-4 w-4 mr-2 text-saarthiBlue-500" />
          <span>{attendees} {attendees === 1 ? 'attendee' : 'attendees'}</span>
        </div>
      </div>
      
      <div className="flex space-x-3">
        <Button size="sm" className="flex-1 bg-saarthiBlue-600 hover:bg-saarthiBlue-700">
          {t('join')}
        </Button>
        <Button size="sm" variant="outline" className="border-saarthiBlue-200">
          <Heart className="h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
};

const Community = () => {
  const { t } = useLanguage();

  const upcomingEvents = [
    {
      title: t('healthCamp'),
      date: '15 May 2025',
      location: t('communityCenter'),
      attendees: 24,
      category: 'health'
    },
    {
      title: t('digitalLiteracy'),
      date: '20 May 2025',
      location: t('villagePanchayat'),
      attendees: 18,
      category: 'education'
    },
    {
      title: t('seniorMeet'),
      date: '25 May 2025',
      location: t('publicPark'),
      attendees: 35,
      category: 'social'
    },
    {
      title: t('farmersWorkshop'),
      date: '1 June 2025',
      location: t('agriculturalCenter'),
      attendees: 42,
      category: 'education'
    },
    {
      title: t('culturalFestival'),
      date: '10 June 2025',
      location: t('townHall'),
      attendees: 120,
      category: 'social'
    },
    {
      title: t('eyeCheckup'),
      date: '15 June 2025',
      location: t('primaryHealthCenter'),
      attendees: 30,
      category: 'health'
    }
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
          {t('communityTitle')}
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600 mb-8 text-center max-w-2xl mx-auto"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {t('communitySubtitle')}
        </motion.p>

        <Separator className="my-8" />

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">{t('upcomingEvents')}</h2>
          <Button variant="outline">{t('viewAll')}</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </motion.div>
    </Layout>
  );
};

export default Community;
