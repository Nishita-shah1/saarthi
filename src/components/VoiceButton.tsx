
import React, { useState } from 'react';
import { Mic, Square } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface VoiceButtonProps {
  size?: 'sm' | 'md' | 'lg';
  onResult?: (transcript: string) => void;
  className?: string;
}

export const VoiceButton: React.FC<VoiceButtonProps> = ({ 
  size = 'lg', 
  onResult, 
  className 
}) => {
  const [isListening, setIsListening] = useState(false);
  const [pulseAnimation, setPulseAnimation] = useState(false);

  // Size mapping
  const sizeClasses = {
    sm: "w-12 h-12 text-xl",
    md: "w-16 h-16 text-2xl",
    lg: "w-24 h-24 text-3xl"
  };

  const handleVoiceButtonClick = () => {
    setIsListening(!isListening);
    setPulseAnimation(!pulseAnimation);
    
    // Simulate voice recognition (in a real app, this would use the Web Speech API)
    if (!isListening) {
      setTimeout(() => {
        setIsListening(false);
        setPulseAnimation(false);
        if (onResult) {
          // Simulated response
          onResult("मुझे सरकारी योजनाओं के बारे में जानकारी चाहिए");
        }
      }, 5000); // Simulate 5 seconds of listening
    }
  };

  return (
    <motion.button
      onClick={handleVoiceButtonClick}
      className={cn(
        "voice-button relative",
        sizeClasses[size],
        pulseAnimation && "animate-pulse-gentle",
        className
      )}
      aria-label={isListening ? "स्टॉप रिकॉर्डिंग" : "बोलना शुरू करें"}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
    >
      {isListening ? (
        <Square className="h-1/2 w-1/2" />
      ) : (
        <Mic className="h-1/2 w-1/2" />
      )}
      {pulseAnimation && (
        <motion.span 
          className="absolute inset-0 rounded-full bg-primary/30"
          initial={{ scale: 0.8, opacity: 0.7 }}
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.7, 0.2, 0.7] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5 
          }}
        />
      )}
    </motion.button>
  );
};
