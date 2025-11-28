import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export function AnimatedSection({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0
}) {
  const {
    elementRef,
    isVisible
  } = useIntersectionObserver({
    threshold: 0.1
  });
  const animations = {
    'fade-up': 'opacity-0 translate-y-10',
    'fade-in': 'opacity-0',
    'scale-in': 'opacity-0 scale-95',
    'slide-left': 'opacity-0 -translate-x-10',
    'slide-right': 'opacity-0 translate-x-10'
  };
  const visibleState = {
    'fade-up': 'opacity-100 translate-y-0',
    'fade-in': 'opacity-100',
    'scale-in': 'opacity-100 scale-100',
    'slide-left': 'opacity-100 translate-x-0',
    'slide-right': 'opacity-100 translate-x-0'
  };
  return <div ref={elementRef} className={`
        transition-all duration-700 ease-out
        ${isVisible ? visibleState[animation] : animations[animation]}
        ${className}
      `} style={{
    transitionDelay: `${delay}ms`
  }}>
      {children}
    </div>;
}