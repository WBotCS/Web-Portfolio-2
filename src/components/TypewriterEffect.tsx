import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenPhrases?: number;
}

export function TypewriterEffect({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenPhrases = 2000
}: TypewriterEffectProps) {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (isComplete) return;

    const currentPhrase = phrases[phraseIndex];
    
    if (isTyping) {
      if (text.length < currentPhrase.length) {
        const timeout = setTimeout(() => {
          setText(currentPhrase.slice(0, text.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        if (phraseIndex === phrases.length - 1) {
          setIsComplete(true);
          return;
        }
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, delayBetweenPhrases);
        return () => clearTimeout(timeout);
      }
    } else {
      if (text.length > 0) {
        const timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(true);
        setPhraseIndex(prev => prev + 1);
      }
    }
  }, [text, isTyping, phraseIndex, phrases, typingSpeed, deletingSpeed, delayBetweenPhrases, isComplete]);

  return (
    <div className="font-mono text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-2 sm:p-3 rounded-lg shadow-sm max-w-[90vw] sm:max-w-md">
      <span>{text}</span>
      <span className={`inline-block w-1.5 sm:w-2 h-3 sm:h-4 ml-0.5 bg-blue-500 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
    </div>
  );
}