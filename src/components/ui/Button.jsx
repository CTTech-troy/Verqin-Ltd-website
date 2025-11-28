import React from 'react';

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  const baseStyles = 'font-medium rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2';
  const variants = {
    primary: 'bg-[#6EC1E4] text-white hover:bg-[#2B95D6] hover:shadow-lg hover:scale-105 active:scale-100 active:shadow-md',
    secondary: 'bg-[#E6E9EE] text-[#182026] hover:bg-[#E6E9EE] hover:shadow-lg hover:scale-105 active:scale-100',
    outline: 'border-2 border-[#6EC1E4] text-[#6EC1E4] bg-white hover:bg-[#6EC1E4] hover:text-white hover:border-[#2B95D6] hover:shadow-lg hover:scale-105 active:scale-100 active:shadow-md'
  };
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  return <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>;
}