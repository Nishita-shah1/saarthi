
import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-medium">साथी (Saarthi)</p>
            <p className="text-sm text-gray-600">आपका डिजिटल सहायक</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-gray-600 mb-2">आपातकालीन सहायता: 1800-XXX-XXXX</p>
            <div className="flex items-center">
              <Heart size={16} className="text-red-500 mr-1" />
              <p className="text-sm">आपकी सेवा में</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
