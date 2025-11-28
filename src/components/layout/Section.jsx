import React from 'react';

export function Section({
  children,
  className = '',
  background = 'white'
}) {
  const bgColor = background === 'gray' ? 'bg-gray-bg' : 'bg-white';

  return (
    <section className={`py-16 md:py-24 ${bgColor} ${className}`}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
}