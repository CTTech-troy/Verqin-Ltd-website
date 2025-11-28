import React from 'react';

export function Select({
  label,
  options,
  error,
  className = '',
  id,
  ...props
}) {
  const selectId = id || `select-${label.replace(/\s+/g, '-').toLowerCase()}`;
  return <div className="relative w-full">
      <label htmlFor={selectId} className="block mb-2 text-sm font-medium text-gray-text">
        {label} {props.required && <span className="text-red-500">*</span>}
      </label>
      <select id={selectId} className={`
          w-full px-4 py-3 text-gray-text bg-white border-2 rounded-xl
          transition-all duration-200 outline-none appearance-none
          ${error ? 'border-red-500' : 'border-gray-panel focus:border-primary'}
          ${className}
        `} {...props}>
        <option value="">Select {label}</option>
        {options.map(option => <option key={option.value} value={option.value}>
            {option.label}
          </option>)}
      </select>
      {error && <p className="mt-1 text-sm text-red-500 animate-fade-in">{error}</p>}
    </div>;
}