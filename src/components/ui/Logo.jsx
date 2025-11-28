import React from 'react';
import logoImg from '../../assets/logo.png';

export function Logo({
  className = '',
  size = 'md'
}) {
  const sizes = {
    sm: 'w-10 h-10',    // Small - For mobile headers & sidebars
    md: 'w-18 h-18',    // Medium - For standard headers & navigation
    lg: 'w-18 h-18',    // Large - For hero sections & featured areas
    xl: 'w-18 h-18'     // Extra Large - For landing pages & prominent displays
  };
  return <div className={`shrink-0 ${sizes[size]} ${className}`} >
      <img src={logoImg} alt="Verqin Logo" className="w-full h-full object-contain" />
    </div>;
}