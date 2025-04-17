import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'hi' | 'bn' | 'te' | 'ta';

type TranslationKey = 
  // General UI
  | 'welcome' | 'subtitle' | 'tapToAsk' | 'schemes' | 'emergency' | 'jobs' | 'volunteer'
  | 'downloadPdf' | 'sendToWhatsApp' | 'showMore' | 'showLess' | 'repeat' | 'showDashboard' | 'hideDashboard' | 'pleaseselect' | 'how_can_we_help'
  // Navigation
  | 'home' | 'help' | 'community' | 'about'
  // Schemes page
  | 'schemesTitle' | 'schemesSubtitle' | 'pmayScheme' | 'pmjayScheme' | 'pensionScheme' 
  | 'skillScheme' | 'kccScheme' | 'scholarshipScheme'
  | 'pmayDescription' | 'pmjayDescription' | 'pensionDescription' 
  | 'skillDescription' | 'kccDescription' | 'scholarshipDescription'
  // Help page
  | 'helpTitle' | 'helpDescription' | 'callVolunteer' | 'chatVolunteer'
  | 'emergencyContacts' | 'emergencyHelpline' | 'medicalEmergency' | 'womenHelpline' | 'childHelpline'
  | 'emergencyAlert' | 'emergencyDescription'
  // Community page
  | 'communityTitle' | 'communitySubtitle' | 'upcomingEvents' | 'viewAll' | 'join'
  | 'healthCamp' | 'digitalLiteracy' | 'seniorMeet' | 'farmersWorkshop' | 'culturalFestival' | 'eyeCheckup'
  | 'communityCenter' | 'villagePanchayat' | 'publicPark' | 'agriculturalCenter' | 'townHall' | 'primaryHealthCenter'
  // About page
  | 'aboutTitle' | 'aboutSubtitle' | 'ourMission' | 'missionDescription1' | 'missionDescription2' 
  | 'withLove' | 'contactUs' | 'callUs' | 'emailUs' | 'visitUs' | 'tollFree' | 'alwaysHere' 
  | 'headOffice' | 'newDelhi'
  // Results section
  | 'youAsked' | 'answer' | 'playing' | 'listenAgain' | 'tellMore' | 'download' | 'talkToVolunteer';

type Translations = Record<Language, Record<TranslationKey, string>>;

const translations: Translations = {
  en: {
    // General UI
    welcome: 'Welcome to Saarthi',
    pleaseselect: 'Please select to let us help',
    how_can_we_help:'How can we help?',
    subtitle: 'Your Digital Assistant',
    tapToAsk: 'Tap the microphone and ask anything',
    schemes: 'Schemes',
    emergency: 'Emergency',
    jobs: 'Jobs',
    volunteer: 'Talk to Volunteer',
    downloadPdf: 'Download PDF',
    sendToWhatsApp: 'Send to WhatsApp',
    showMore: 'Show More',
    showLess: 'Show Less',
    repeat: 'Repeat',
    showDashboard: 'Show Admin Dashboard',
    hideDashboard: 'Hide Admin Dashboard',
    // Navigation
    home: 'Home',
    help: 'Help & Emergency',
    community: 'Community',
    about: 'About Us',
    // Schemes page
    schemesTitle: 'Government Schemes',
    schemesSubtitle: 'Explore various government schemes that you might be eligible for',
    pmayScheme: 'PM Awas Yojana',
    pmjayScheme: 'Ayushman Bharat',
    pensionScheme: 'National Pension Scheme',
    skillScheme: 'Skill India',
    kccScheme: 'Kisan Credit Card',
    scholarshipScheme: 'National Scholarship Portal',
    pmayDescription: 'Housing scheme for the economically weaker sections',
    pmjayDescription: 'Healthcare coverage up to ₹5 lakhs per family',
    pensionDescription: 'Pension benefits for senior citizens',
    skillDescription: 'Free skill training and job placements',
    kccDescription: 'Credit support for farmers with flexible repayment options',
    scholarshipDescription: 'Educational scholarships for students',
    // Help page
    helpTitle: 'How can we help you?',
    helpDescription: 'If you need immediate assistance, you can talk to one of our volunteers or call an emergency helpline',
    callVolunteer: 'Call a Volunteer',
    chatVolunteer: 'Chat with Volunteer',
    emergencyContacts: 'Emergency Contacts',
    emergencyHelpline: 'Emergency Helpline',
    medicalEmergency: 'Medical Emergency',
    womenHelpline: 'Women Helpline',
    childHelpline: 'Child Helpline',
    emergencyAlert: 'In case of emergency',
    emergencyDescription: 'If you are facing a medical or safety emergency, please call 112 immediately for immediate assistance.',
    // Community page
    communityTitle: 'Community Connect',
    communitySubtitle: 'Join local events and connect with people in your community',
    upcomingEvents: 'Upcoming Events',
    viewAll: 'View All',
    join: 'Join Event',
    healthCamp: 'Health Check-up Camp',
    digitalLiteracy: 'Digital Literacy Workshop',
    seniorMeet: 'Senior Citizens Meet',
    farmersWorkshop: 'Farmers Training Workshop',
    culturalFestival: 'Cultural Festival',
    eyeCheckup: 'Free Eye Check-up',
    communityCenter: 'Community Center',
    villagePanchayat: 'Village Panchayat',
    publicPark: 'Public Park',
    agriculturalCenter: 'Agricultural Center',
    townHall: 'Town Hall',
    primaryHealthCenter: 'Primary Health Center',
    // About page
    aboutTitle: 'About Saarthi',
    aboutSubtitle: 'Bridging the digital divide for rural India',
    ourMission: 'Our Mission',
    missionDescription1: 'Saarthi aims to bridge the digital divide by empowering elderly and disabled citizens in rural India with voice-first technology.',
    missionDescription2: 'We believe that access to information and government services should be available to every citizen, regardless of their digital literacy or physical abilities.',
    withLove: 'Made with love for rural India',
    contactUs: 'Contact Us',
    callUs: 'Call Us',
    emailUs: 'Email Us',
    visitUs: 'Visit Us',
    tollFree: 'Toll-free number',
    alwaysHere: 'We are always here to help',
    headOffice: 'Head Office',
    newDelhi: 'New Delhi, India',
    // Results section
    youAsked: 'You Asked',
    answer: 'Answer',
    playing: 'Playing...',
    listenAgain: 'Listen Again',
    tellMore: 'Tell Me More',
    download: 'Download',
    talkToVolunteer: 'Talk to Volunteer'
  },
  hi: {
    // General UI
    welcome: 'सार्थीें आपका स्वागत है',
    pleaseselect: 'कृपया चुनें ताकि हम मदद कर सकें',
    how_can_we_help: 'हम कैसे मदद कर सकते हैं?',
    subtitle: 'आपका डिजिटल सहायक',
    tapToAsk: 'माइक्रोफोन पर टैप करें और कुछ भी पूछें',
    schemes: 'योजनाएं',
    emergency: 'आपातकालीन',
    jobs: 'नौकरियां',
    volunteer: 'स्वयंसेवक से बात करें',
    downloadPdf: 'पीडीएफ डाउनलोड करें',
    sendToWhatsApp: 'व्हाट्सएप पर भेजें',
    showMore: 'और दिखाएं',
    showLess: 'कम दिखाएं',
    repeat: 'दोहराएं',
    showDashboard: 'एडमिन डैशबोर्ड दिखाएं',
    hideDashboard: 'एडमिन डैशबोर्ड छिपाएं',
    // Navigation
    home: 'होम',
    help: 'सहायता और आपातकाल',
    community: 'समुदाय',
    about: 'हमारे बारे में',
    // Schemes page
    schemesTitle: 'सरकारी योजनाएं',
    schemesSubtitle: 'विभिन्न सरकारी योजनाओं का पता लगाएं जिनके लिए आप पात्र हो सकते हैं',
    pmayScheme: 'पीएम आवास योजना',
    pmjayScheme: 'आयुष्मान भारत',
    pensionScheme: 'राष्ट्रीय पेंशन योजना',
    skillScheme: 'कौशल भारत',
    kccScheme: 'किसान क्रेडिट कार्ड',
    scholarshipScheme: 'राष्ट्रीय छात्रवृत्ति पोर्टल',
    pmayDescription: 'आर्थिक रूप से कमजोर वर्गों के लिए आवास योजना',
    pmjayDescription: 'प्रति परिवार ₹5 लाख तक का स्वास्थ्य कवरेज',
    pensionDescription: 'वरिष्ठ नागरिकों के लिए पेंशन लाभ',
    skillDescription: 'मुफ्त कौशल प्रशिक्षण और नौकरी प्लेसमेंट',
    kccDescription: 'लचीले पुनर्भुगतान विकल्पों के साथ किसानों के लिए क्रेडिट सहायता',
    scholarshipDescription: 'छात्रों के लिए शैक्षिक छात्रवृत्ति',
    // Help page
    helpTitle: 'हम आपकी कैसे मदद कर सकते हैं?',
    helpDescription: 'यदि आपको तत्काल सहायता की आवश्यकता है, तो आप हमारे किसी स्वयंसेवक से बात कर सकते हैं या आपातकालीन हेल्पलाइन पर कॉल कर सकते हैं',
    callVolunteer: 'स्वयंसेवक को कॉल करें',
    chatVolunteer: 'स्वयंसेवक से चैट करें',
    emergencyContacts: 'आपातकालीन संपर्क',
    emergencyHelpline: 'आपातकालीन हेल्पलाइन',
    medicalEmergency: 'चिकित्सा आपातकाल',
    womenHelpline: 'महिला हेल्पलाइन',
    childHelpline: 'बाल हेल्पलाइन',
    emergencyAlert: 'आपातकाल की स्थिति में',
    emergencyDescription: 'यदि आप चिकित्सा या सुरक्षा आपातकाल का सामना कर रहे हैं, तो तत्काल सहायता के लिए 112 पर कॉल करें।',
    // Community page
    communityTitle: 'समुदाय कनेक्ट',
    communitySubtitle: 'स्थानीय कार्यक्रमों में शामिल हों और अपने समुदाय के लोगों से जुड़ें',
    upcomingEvents: 'आगामी कार्यक्रम',
    viewAll: 'सभी देखें',
    join: 'कार्यक्रम में शामिल हों',
    healthCamp: 'स्वास्थ्य जांच शिविर',
    digitalLiteracy: 'डिजिटल साक्षरता कार्यशाला',
    seniorMeet: 'वरिष्ठ नागरिक मिलन',
    farmersWorkshop: 'किसान प्रशिक्षण कार्यशाला',
    culturalFestival: 'सांस्कृतिक उत्सव',
    eyeCheckup: 'मुफ्त आंख जांच',
    communityCenter: 'सामुदायिक केंद्र',
    villagePanchayat: 'ग्राम पंचायत',
    publicPark: 'सार्वजनिक पार्क',
    agriculturalCenter: 'कृषि केंद्र',
    townHall: 'टाउन हॉल',
    primaryHealthCenter: 'प्राथमिक स्वास्थ्य केंद्र',
    // About page
    aboutTitle: 'साथी के बारे में',
    aboutSubtitle: 'ग्रामीण भारत के लिए डिजिटल विभाजन को पाटना',
    ourMission: 'हमारा मिशन',
    missionDescription1: 'साथी का उद्देश्य ग्रामीण भारत में बुजुर्ग और विकलांग नागरिकों को आवाज-पहले की तकनीक से सशक्त बनाकर डिजिटल विभाजन को पाटना है।',
    missionDescription2: 'हम मानते हैं कि सूचना और सरकारी सेवाओं तक पहुंच हर नागरिक के लिए उपलब्ध होनी चाहिए, चाहे उनकी डिजिटल साक्षरता या शारीरिक क्षमताएं कुछ भी हों।',
    withLove: 'ग्रामीण भारत के लिए प्यार से बनाया गया',
    contactUs: 'संपर्क करें',
    callUs: 'हमें कॉल करें',
    emailUs: 'हमें ईमेल करें',
    visitUs: 'हमसे मिलें',
    tollFree: 'टोल-फ्री नंबर',
    alwaysHere: 'हम हमेशा मदद के लिए यहां हैं',
    headOffice: 'प्रधान कार्यालय',
    newDelhi: 'नई दिल्ली, भारत',
    // Results section
    youAsked: 'आपने पूछा',
    answer: 'उत्तर',
    playing: 'चल रहा है...',
    listenAgain: 'फिर से सुनें',
    tellMore: 'और बताएं',
    download: 'डाउनलोड करें',
    talkToVolunteer: 'स्वयंसेवक से बात करें'
  },
  bn: {
    // General UI
    welcome: 'সাথীতে আপনাকে স্বাগতম',
    pleaseselect: 'আমাদের সাহায্য করতে নির্বাচন করুন',
    how_can_we_help: 'আমরা কিভাবে সাহায্য করতে পারি?',
    subtitle: 'আপনার ডিজিটাল সহায়ক',
    tapToAsk: 'মাইক্রোফোনে আলতো চাপ দিন এবং যে কোনো কিছু জিজ্ঞাসা করুন',
    schemes: 'প্রকল্পগুলি',
    emergency: 'জরুরী',
    jobs: 'চাকরি',
    volunteer: 'স্বেচ্ছাসেবকের সাথে কথা বলুন',
    downloadPdf: 'পিডিএফ ডাউনলোড করুন',
    sendToWhatsApp: 'হোয়াটসঅ্যাপে পাঠান',
    showMore: 'আরো দেখুন',
    showLess: 'কম দেখুন',
    repeat: 'পুনরাবৃত্তি করুন',
    showDashboard: 'অ্যাডমিন ড্যাশবোর্ড দেখান',
    hideDashboard: 'অ্যাডমিন ড্যাশবোর্ড লুকান',
    // Navigation
    home: 'হোম',
    help: 'সাহায্য এবং জরুরী',
    community: 'সম্প্রদায়',
    about: 'আমাদের সম্পর্কে',
    // Schemes page
    schemesTitle: 'সরকারি প্রকল্পগুলি',
    schemesSubtitle: 'বিভিন্ন সরকারি প্রকল্প অন্বেষণ করুন যার জন্য আপনি যোগ্য হতে পারেন',
    pmayScheme: 'পিএম আবাস যোজনা',
    pmjayScheme: 'আয়ুষ্মান ভারত',
    pensionScheme: 'জাতীয় পেনশন প্রকল্প',
    skillScheme: 'দক্ষতা ভারত',
    kccScheme: 'কিষাণ ক্রেডিট কার্ড',
    scholarshipScheme: 'জাতীয় বৃত্তি পোর্টাল',
    pmayDescription: 'অর্থনৈতিকভাবে দুর্বল বিভাগের জন্য আবাসন প্রকল্প',
    pmjayDescription: 'প্রতি পরিবারের জন্য ₹5 লাখ পর্যন্ত স্বাস্থ্য কভারেজ',
    pensionDescription: 'বরিষ্ঠ নাগরিকদের জন্য পেনশন সুবিধা',
    skillDescription: 'বিনামূল্যে দক্ষতা প্রশিক্ষণ এবং চাকরির নিয়োগ',
    kccDescription: 'নমনীয় পরিশোধের বিকল্পগুলির সাথে কৃষকদের জন্য ক্রেডিট সমর্থন',
    scholarshipDescription: 'ছাত্রদের জন্য শিক্ষামূলক বৃত্তি',
    // Help page
    helpTitle: 'আমরা আপনাকে কীভাবে সাহায্য করতে পারি?',
    helpDescription: 'যদি আপনার অবিলম্বে সহায়তার প্রয়োজন হয়, আপনি আমাদের স্বেচ্ছাসেবকদের সাথে কথা বলতে পারেন বা জরুরী হেল্পলাইনে কল করতে পারেন',
    callVolunteer: 'স্বেচ্ছাসেবককে কল করুন',
    chatVolunteer: 'স্বেচ্ছাসেবকের সাথে চ্যাট করুন',
    emergencyContacts: 'জরুরী যোগাযোগ',
    emergencyHelpline: 'জরুরী হেল্পলাইন',
    medicalEmergency: 'চিকিৎসা জরুরী',
    womenHelpline: 'মহিলা হেল্পলাইন',
    childHelpline: 'শিশু হেল্পলাইন',
    emergencyAlert: 'জরুরী অবস্থায়',
    emergencyDescription: 'যদি আপনি চিকিৎসা বা নিরাপত্তা জরুরী অবস্থার সম্মুখীন হন, অবিলম্বে সহায়তার জন্য 112 নম্বরে কল করুন।',
    // Community page
    communityTitle: 'সম্প্রদায় সংযোগ',
    communitySubtitle: 'স্থানীয় অনুষ্ঠানে যোগ দিন এবং আপনার সম্প্রদায়ের লোকদের সাথে সংযোগ করুন',
    upcomingEvents: 'আসন্ন অনুষ্ঠান',
    viewAll: 'সব দেখুন',
    join: 'অনুষ্ঠানে যোগ দিন',
    healthCamp: 'স্বাস্থ্য পরীক্ষা শিবির',
    digitalLiteracy: 'ডিজিটাল সাক্ষরতা কর্মশালা',
    seniorMeet: 'বরিষ্ঠ নাগরিক মিলন',
    farmersWorkshop: 'কৃষক প্রশিক্ষণ কর্মশালা',
    culturalFestival: 'সাংস্কৃতিক উৎসব',
    eyeCheckup: 'বিনামূল্যে চোখ পরীক্ষা',
    communityCenter: 'সম্প্রদায় কেন্দ্র',
    villagePanchayat: 'গ্রাম পঞ্চায়েত',
    publicPark: 'সর্বজনীন পার্ক',
    agriculturalCenter: 'কৃষি কেন্দ্র',
    townHall: 'টাউন হল',
    primaryHealthCenter: 'প্রাথমিক স্বাস্থ্য কেন্দ্র',
    // About page
    aboutTitle: 'সাথী সম্পর্কে',
    aboutSubtitle: 'গ্রামীণ ভারতের জন্য ডিজিটাল বিভাজন সেতু',
    ourMission: 'আমাদের লক্ষ্য',
    missionDescription1: 'সাথী গ্রামীণ ভারতে বয়স্ক এবং প্রতিবন্ধী নাগরিকদের কণ্ঠ-প্রথম প্রযুক্তি দিয়ে ক্ষমতায়িত করে ডিজিটাল বিভাজন সেতু তৈরি করার লক্ষ্য রাখে।',
    missionDescription2: 'আমরা বিশ্বাস করি যে তথ্য এবং সরকারি পরিষেবাগুলিতে অ্যাক্সেস প্রতিটি নাগরিকের জন্য উপলব্ধ হওয়া উচিত, তাদের ডিজিটাল সাক্ষরতা বা শারীরিক ক্ষমতা যাই হোক না কেন।',
    withLove: 'গ্রামীণ ভারতের জন্য ভালোবাসা সহকারে তৈরি',
    contactUs: 'যোগাযোগ করুন',
    callUs: 'আমাদের কল করুন',
    emailUs: 'আমাদের ইমেল করুন',
    visitUs: 'আমাদের দেখতে আসুন',
    tollFree: 'টোল-ফ্রি নম্বর',
    alwaysHere: 'আমরা সবসময় সাহায্য করতে এখানে আছি',
    headOffice: 'প্রধান কার্যালয়',
    newDelhi: 'নতুন দিল্লি, ভারত',
    // Results section
    youAsked: 'আপনি জিজ্ঞাসা করেছেন',
    answer: 'উত্তর',
    playing: 'চলছে...',
    listenAgain: 'আবার শুনুন',
    tellMore: 'আরও বলুন',
    download: 'ডাউনলোড করুন',
    talkToVolunteer: 'স্বেচ্ছাসেবকের সাথে কথা বলুন'
  },
  te: {
    // General UI
    welcome: 'సాథీకి స్వాగతం',
    subtitle: 'మీ డిజిటల్ సహాయకుడు',
    pleaseselect: 'Please select to let us help',
    how_can_we_help: 'మేము ఎలా సహాయం చేయగలము?',
    tapToAsk: 'మైక్రోఫోన్‌ను నొక్కి ఏదైనా అడగండి',
    schemes: 'పథకాలు',
    emergency: 'అత్యవసర',
    jobs: 'ఉద్యోగాలు',
    volunteer: 'స్వచ్ఛంద సేవకునితో మాట్లాడండి',
    downloadPdf: 'PDF డౌన్‌లోడ్ చేయండి',
    sendToWhatsApp: 'WhatsAppకి పంపండి',
    showMore: 'మరిన్ని చూపించు',
    showLess: 'తక్కువ చూపించు',
    repeat: 'మళ్ళీ చెప్పండి',
    showDashboard: 'నిర్వాహక డాష్‌బోర్డ్‌ను చూపించు',
    hideDashboard: 'నిర్వాహక డాష్‌బోర్డ్‌ను దాచు',
    // Navigation
    home: 'హోమ్',
    help: 'సహాయం మరియు అత్యవసర',
    community: 'సంఘం',
    about: 'మా గురించి',
    // Schemes page
    schemesTitle: 'ప్రభుత్వ పథకాలు',
    schemesSubtitle: 'మీరు అర్హులు కావచ్చని వివిధ ప్రభుత్వ పథకాలను అన్వేషించండి',
    pmayScheme: 'పీఎం ఆవాస్ యోజన',
    pmjayScheme: 'ఆయుష్మాన్ భారత్',
    pensionScheme: 'జాతీయ పెన్షన్ పథకం',
    skillScheme: 'స్కిల్ ఇండియా',
    kccScheme: 'కిసాన్ క్రెడిట్ కార్డ్',
    scholarshipScheme: 'జాతీయ స్కాలర్‌షిప్ పోర్టల్',
    pmayDescription: 'ఆర్థికంగా బలహీన వర్గాల కోసం గృహ నిర్మాణ పథకం',
    pmjayDescription: 'కుటుంబానికి ₹5 లక్షల వరకు ఆరోగ్య భీమా',
    pensionDescription: 'సీనియర్ సిటిజన్ల కోసం పెన్షన్ ప్రయోజనాలు',
    skillDescription: 'ఉచిత నైపుణ్య శిక్షణ మరియు ఉద్యోగ ప్లేస్‌మెంట్లు',
    kccDescription: 'సౌకర్యవంతమైన తిరిగి చెల్లింపు ఎంపికలతో రైతులకు క్రెడిట్ మద్దతు',
    scholarshipDescription: 'విద్యార్థులకు విద్యా ఉపకారవేతనాలు',
    // Help page
    helpTitle: 'మేము మీకు ఎలా సహాయం చేయగలం?',
    helpDescription: 'మీకు వెంటనే సహాయం అవసరమైతే, మీరు మా స్వచ్ఛంద సేవకులలో ఒకరితో మాట్లాడవచ్చు లేదా అత్యవసర హెల్ప్‌లైన్‌కు కాల్ చేయవచ్చు',
    callVolunteer: 'స్వచ్ఛంద సేవకుడిని కాల్ చేయండి',
    chatVolunteer: 'స్వచ్ఛంద సేవకునితో చాట్ చేయండి',
    emergencyContacts: 'అత్యవసర సంప్రదింపులు',
    emergencyHelpline: 'అత్యవసర హెల్ప్‌లైన్',
    medicalEmergency: 'వైద్య అత్యవసర',
    womenHelpline: 'మహిళా హెల్ప్‌లైన్',
    childHelpline: 'చిల్డ్రన్ హెల్ప్‌లైన్',
    emergencyAlert: 'అత్యవసర పరిస్థితిలో',
    emergencyDescription: 'మీరు వైద్య లేదా భద్రతా అత్యవసర పరిస్థితిని ఎదుర్కొంటున్నట్లయితే, దయచేసి తక్షణ సహాయం కోసం 112కి కాల్ చేయండి.',
    // Community page
    communityTitle: 'కమ్యూనిటీ కనెక్ట్',
    communitySubtitle: 'స్థానిక కార్యక్రమాలలో చేరండి మరియు మీ సమాజంలోని వ్యక్తులతో కనెక్ట్ అవ్వండి',
    upcomingEvents: 'రాబోయే కార్యక్రమాలు',
    viewAll: 'అన్నీ చూడండి',
    join: 'కార్యక్రమంలో చేరండి',
    healthCamp: 'ఆరోగ్య పరీక్ష శిబిరం',
    digitalLiteracy: 'డిజిటల్ అక్షరాస్యత వర్క్‌షాప్',
    seniorMeet: 'సీనియర్ సిటిజన్స్ మీట్',
    farmersWorkshop: 'రైతుల శిక్షణా వర్క్‌షాప్',
    culturalFestival: 'సాంస్కృతిక పండుగ',
    eyeCheckup: 'ఉచిత కంటి పరీక్ష',
    communityCenter: 'కమ్యూనిటీ సెంటర్',
    villagePanchayat: 'గ్రామ పంచాయతీ',
    publicPark: 'పబ్లిక్ పార్క్',
    agriculturalCenter: 'వ్యవసాయ కేంద్రం',
    townHall: 'టౌన్ హాల్',
    primaryHealthCenter: 'ప్రాథమిక ఆరోగ్య కేంద్రం',
    // About page
    aboutTitle: 'సాథీ గురించి',
    aboutSubtitle: 'గ్రామీణ భారతదేశానికి డిజిటల్ అంతరాన్ని సేతుబంధించడం',
    ourMission: 'మా లక్ష్యం',
    missionDescription1: 'సాథీ గ్రామీణ భారతదేశంలోని వృద్ధులు మరియు వికలాంగ పౌరులకు వాయిస్-ఫస్ట్ టెక్నాలజీతో సాధికారత కల్పించడం ద్వారా డిజిటల్ అంతరాన్ని పూడ్చడానికి లక్ష్యంగా పెట్టుకుంది.',
    missionDescription2: 'సమాచారం మరియు ప్రభుత్వ సేవలకు ప్రాప్యత ప్రతి పౌరుడికి లభించాలని మేము నమ్ముతున్నాము, వారి డిజిటల్ అక్షరాస్యత లేదా శారీరక సామర్థ్యాలతో సంబంధం లేకుండా.',
    withLove: 'గ్రామీణ భారతదేశం కోసం ప్రేమతో తయారు చేయబడింది',
    contactUs: 'మమ్మల్ని సంప్రదించండి',
    callUs: 'మాకు కాల్ చేయండి',
    emailUs: 'మాకు ఇమెయిల్ చేయండి',
    visitUs: 'మమ్మల్ని సందర్శించండి',
    tollFree: 'టోల్-ఫ్రీ నంబర్',
    alwaysHere: 'మేము ఎల్లప్పుడూ సహాయం చేయడానికి ఇక్కడ ఉన్నాము',
    headOffice: 'హెడ్ ఆఫీస్',
    newDelhi: 'న్యూ ఢిల్లీ, భారతదేశం',
    // Results section
    youAsked: 'మీరు అడిగారు',
    answer: 'సమాధానం',
    playing: 'ప్లే అవుతోంది...',
    listenAgain: 'మళ్ళీ వినండి',
    tellMore: 'మరింత చెప్పండి',
    download: 'డౌన్‌లోడ్ చేయండి',
    talkToVolunteer: 'స్వచ్ఛంద సేవకునితో మాట్లాడండి'
  },
  ta: {
    // General UI
    welcome: 'சாத்தியில் வரவேற்கிறோம்',
    subtitle: 'உங்கள் டிஜிட்டல் உதவியாளர்',
    pleaseselect: 'எங்களுக்கு உதவ தயவு செய்து தேர்ந்தெடுக்கவும்',
    how_can_we_help: 'நாங்கள் எப்படி உதவ முடியும்?',
    tapToAsk: 'மைக்ரோஃபோனைத் தட்டி எதையும் கேளுங்கள்',
    schemes: 'திட்டங்கள்',
    emergency: 'அவசரநிலை',
    jobs: 'வேலைகள்',
    volunteer: 'தன்னார்வலருடன் பேசுங்கள்',
    downloadPdf: 'PDF பதிவிறக்கவும்',
    sendToWhatsApp: 'வாட்ஸ்அப்புக்கு அனுப்பவும்',
    showMore: 'மேலும் காட்டு',
    showLess: 'குறைவாக காட்டு',
    repeat: 'மீண்டும் செய்',
    showDashboard: 'நிர்வாக டாஷ்போர்டைக் காட்டு',
    hideDashboard: 'நிர்வாக டாஷ்போர்டை மறை',
    // Navigation
    home: 'முகப்பு',
    help: 'உதவி மற்றும் அவசரநிலை',
    community: 'சமூகம்',
    about: 'எங்களைப் பற்றி',
    // Schemes page
    schemesTitle: 'அரசு திட்டங்கள்',
    schemesSubtitle: 'நீங்கள் தகுதியுடையவராக இருக்கக்கூடிய பல்வேறு அரசு திட்டங்களை ஆராயுங்கள்',
    pmayScheme: 'பிஎம் ஆவாஸ் யோஜனா',
    pmjayScheme: 'ஆயுஷ்மான் பாரத்',
    pensionScheme: 'தேசிய ஓய்வூதியத் திட்டம்',
    skillScheme: 'திறன் இந்தியா',
    kccScheme: 'கிசான் கிரெடிட் கார்டு',
    scholarshipScheme: 'தேசிய உதவித்தொகை போர்டல்',
    pmayDescription: 'பொருளாதார ரீதியாக பலவீனமான பிரிவினருக்கான வீட்டுவசதித் திட்டம்',
    pmjayDescription: 'குடும்பத்திற்கு ₹5 லட்சம் வரை சுகாதாரக் காப்பீடு',
    pensionDescription: 'மூத்த குடிமக்களுக்கான ஓய்வூதிய பலன்கள்',
    skillDescription: 'இலவச திறன் பயிற்சி மற்றும் வேலை வாய்ப்புகள்',
    kccDescription: 'நெகிழ்வான திருப்பிச் செலுத்தும் விருப்பங்களுடன் விவசாயிகளுக்கான கடன் ஆதரவு',
    scholarshipDescription: 'மாணவர்களுக்கான கல்வி உதவித்தொகைகள்',
    // Help page
    helpTitle: 'நாங்கள் எப்படி உதவ முடியும்?',
    helpDescription: 'உங்களுக்கு உடனடி உதவி தேவைப்பட்டால், எங்கள் தன்னார்வலர்களில் ஒருவருடன் பேசலாம் அல்லது அவசரகால உதவி எண்ணை அழைக்கலாம்',
    callVolunteer: 'தன்னார்வலரை அழைக்கவும்',
    chatVolunteer: 'தன்னார்வலருடன் அரட்டை',
    emergencyContacts: 'அவசரகால தொடர்புகள்',
    emergencyHelpline: 'அவசரகால உதவி எண்',
    medicalEmergency: 'மருத்துவ அவசரநிலை',
    womenHelpline: 'பெண்கள் உதவி எண்',
    childHelpline: 'குழந்தைகள் உதவி எண்',
    emergencyAlert: 'அவசரநிலையில்',
    emergencyDescription: 'நீங்கள் மருத்துவ அல்லது பாதுகாப்பு அவசரநிலையை எதிர்கொள்கிறீர்கள் என்றால், உடனடி உதவிக்கு 112ஐ அழைக்கவும்.',
    // Community page
    communityTitle: 'சமூக இணைப்பு',
    communitySubtitle: 'உள்ளூர் நிகழ்வுகளில் சேரவும் மற்றும் உங்கள் சமூகத்தில் உள்ள மக்களுடன் இணையவும்',
    upcomingEvents: 'வரவிருக்கும் நிகழ்வுகள்',
    viewAll: 'அனைத்தையும் காண்க',
    join: 'நிகழ்வில் சேர்க',
    healthCamp: 'சுகாதார பரிசோதனை முகாம்',
    digitalLiteracy: 'டிஜிட்டல் கல்வியறிவு பட்டறை',
    seniorMeet: 'மூத்த குடிமக்கள் சந்திப்பு',
    farmersWorkshop: 'விவசாயிகள் பயிற்சி பட்டறை',
    culturalFestival: 'கலாச்சார விழா',
    eyeCheckup: 'இலவச கண் பரிசோதனை',
    communityCenter: 'சமூக மையம்',
    villagePanchayat: 'கிராம பஞ்சாயத்து',
    publicPark: 'பொது பூங்கா',
    agriculturalCenter: 'விவசாய மையம்',
    townHall: 'டவுன் ஹால்',
    primaryHealthCenter: 'ஆரம்ப சுகாதார நிலையம்',
    // About page
    aboutTitle: 'சாத்தி பற்றி',
    aboutSubtitle: 'கிராமப்புற இந்தியாவுக்கான டிஜிட்டல் பிரிவினை இணைத்தல்',
    ourMission: 'எங்கள் இலக்கு',
    missionDescription1: 'சாத்தி கிராமப்புற இந்தியாவில் முதியோர் மற்றும் மாற்றுத்திறனாளிகளுக்கு குரல்-முதல் தொழில்நுட்பத்தின் மூலம் அதிகாரம் அளிப்பதன் மூலம் டிஜிட்டல் பிரிவை இணைக்க இலக்கு கொண்டுள்ளது.',
    missionDescription2: 'தகவல் மற்றும் அரசு சேவைகளுக்கான அணுகல் அவர்களின் டிஜிட்டல் கல்வியறிவு அல்லது உடல் திறன்களைப் பொருட்படுத்தாமல் ஒவ்வொரு குடிமகனுக்கும் கிடைக்க வேண்டும் என்று நாங்கள் நம்புகிறோம்.',
    withLove: 'கிராமப்புற இந்தியாவுக்காக அன்புடன் உருவாக்கப்பட்டது',
    contactUs: 'எங்களை தொடர்பு கொள்ளவும்',
    callUs: 'எங்களை அழைக்கவும்',
    emailUs: 'எங்களுக்கு மின்னஞ்சல் அனுப்பவும்',
    visitUs: 'எங்களை சந்திக்க வாருங்கள்',
    tollFree: 'கட்டணமில்லா எண்',
    alwaysHere: 'நாங்கள் எப்போதும் உதவ இங்கே இருக்கிறோம்',
    headOffice: 'தலைமை அலுவலகம்',
    newDelhi: 'புது டெல்லி, இந்தியா',
    // Results section
    youAsked: 'நீங்கள் கேட்டது',
    answer: 'பதில்',
    playing: 'இயங்குகிறது...',
    listenAgain: 'மீண்டும் கேட்க',
    tellMore: 'மேலும் சொல்லுங்கள்',
    download: 'பதிவிறக்கம் செய்',
    talkToVolunteer: 'தன்னார்வலருடன் பேசுங்கள்'
  }
};

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('hi');

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
