import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
  options: Array<{ value: string; label: string }>;
}

export const Select: React.FC<SelectProps> = ({ 
  error = false, 
  options, 
  className = '',
  ...props 
}) => {
  return (
    <div className="relative">
      <select
        className={`w-full px-3 py-3 pr-10 border-2 rounded-[10px] focus:outline-none transition-colors appearance-none bg-white ${
          error ? 'border-wise-error focus:border-wise-error' : 'border-wise-gray200 focus:border-wise-green'
        } ${className}`}
        {...props}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <ChevronDownIcon className="h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
};