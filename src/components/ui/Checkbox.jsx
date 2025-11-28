import React from 'react';

export function Checkbox({
  label,
  error,
  className = '',
  id,
  ...props
}) {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
  return <div className="w-full">
      <div className="flex items-start gap-3">
        <input type="checkbox" id={checkboxId} className={`
            mt-1 w-5 h-5 text-primary-dark bg-white border-2 border-gray-panel
            rounded focus:ring-2 focus:ring-primary focus:ring-offset-2
            transition-all duration-200 cursor-pointer
            ${className}
          `} {...props} />
        <label htmlFor={checkboxId} className="text-sm text-gray-text cursor-pointer select-none">
          {label} {props.required && <span className="text-red-500">*</span>}
        </label>
      </div>
      {error && <p className="mt-1 ml-8 text-sm text-red-500 animate-fade-in">
          {error}
        </p>}
    </div>;
}