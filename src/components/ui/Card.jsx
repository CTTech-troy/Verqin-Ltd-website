import React from 'react';

export function Card({
  children,
  className = '',
  hover = false
}) {
  return <div className={`
        bg-white rounded-2xl shadow-md p-6
        ${hover ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1' : ''}
        ${className}
      `}>
      {children}
    </div>;
}