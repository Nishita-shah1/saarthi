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

  const sizeClasses = {
    sm: "w-12 h-12 text-xl",
    md: "w-16 h-16 text-2xl",
    lg: "w-24 h-24 text-3xl"
  };

  const handleVoiceButtonClick = () => {
    setIsListening(!isListening);
    setPulseAnimation(!pulseAnimation);

    if (!isListening) {
      setTimeout(() => {
        setIsListening(false);
        setPulseAnimation(false);
        if (onResult) {
          onResult("मुझे सरकारी योजनाओं के बारे में जानकारी चाहिए");
        }
      }, 5000);
    }
  };

  return (
    <motion.button
      onClick={handleVoiceButtonClick}
      className={cn(
        "voice-button relative flex items-center justify-center rounded-full bg-primary text-white",
        sizeClasses[size],
        pulseAnimation && "shadow-md",
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

      {!isListening && (
        <motion.div
          className="absolute inset-0 rounded-full bg-primary shadow-lg pointer-events-none"
          style={{ opacity: 0.6 }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            type: "tween",
            ease: "easeInOut",
          }}
        />
      )}

      {isListening && (
        <motion.span
          className="absolute inset-0 rounded-full bg-primary/30 blur-md pointer-events-none"
          initial={{ scale: 1, opacity: 0.6 }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 0.1, 0.6]
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8
          }}
        />
      )}
    </motion.button>
  );
};