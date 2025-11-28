import React, { useState } from 'react';

export function Input({
  label,
  error,
  helperText,
  className = '',
  id,
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const inputId = id || `input-${label.replace(/\s+/g, '-').toLowerCase()}`;
  return <div className="relative w-full">
      <input id={inputId} className={`
          w-full px-4 pt-6 pb-2 text-gray-text bg-white border-2 rounded-xl
          transition-all duration-200 outline-none
          ${error ? 'border-red-500' : 'border-gray-panel focus:border-primary'}
          ${className}
        `} onFocus={e => {
      setIsFocused(true);
      props.onFocus?.(e);
    }} onBlur={e => {
      setIsFocused(false);
      props.onBlur?.(e);
    }} onChange={e => {
      setHasValue(e.target.value.length > 0);
      props.onChange?.(e);
    }} {...props} />
      <label htmlFor={inputId} className={`
          absolute left-4 transition-all duration-200 pointer-events-none
          ${isFocused || hasValue || props.value ? 'top-2 text-xs text-gray-muted' : 'top-4 text-base text-gray-muted'}
        `}>
        {label} {props.required && <span className="text-red-500">*</span>}
      </label>
      {error && <p className="mt-1 text-sm text-red-500 animate-fade-in">{error}</p>}
      {helperText && !error && <p className="mt-1 text-sm text-gray-muted">{helperText}</p>}
    </div>;
}