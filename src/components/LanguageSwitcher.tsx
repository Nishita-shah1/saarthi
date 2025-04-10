
import React from 'react';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage, type Language } from '@/contexts/LanguageContext';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  
  const languages = [
    { code: 'hi', name: 'हिंदी' },
    { code: 'en', name: 'English' },
    { code: 'bn', name: 'বাংলা' },
    { code: 'te', name: 'తెలుగు' },
    { code: 'ta', name: 'தமிழ்' },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 text-lg hover:bg-saarthiBlue-50 transition-colors">
          <Globe size={20} className="text-saarthiBlue-600" />
          <span>{languages.find(lang => lang.code === language)?.name || 'हिंदी'}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40 bg-white shadow-md border border-saarthiBlue-100">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className="text-lg cursor-pointer hover:bg-saarthiBlue-50 transition-colors"
            onClick={() => setLanguage(lang.code as Language)}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
