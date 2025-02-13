import React from 'react';
import { useInView } from '../hooks/useInView';

type AnimateOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'slide-in-right' | 'slide-in-left';
  delay?: number;
};

export function AnimateOnScroll({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0 
}: AnimateOnScrollProps) {
  const [ref, isInView] = useInView();

  const animations = {
    'fade-up': 'translate-y-10 opacity-0',
    'fade-in': 'opacity-0',
    'slide-in-right': 'translate-x-10 opacity-0',
    'slide-in-left': '-translate-x-10 opacity-0'
  };

  return (
    <div
      ref={ref as any}
      className={`transform transition-all duration-1000 ease-out ${className} ${
        isInView ? '' : animations[animation]
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}