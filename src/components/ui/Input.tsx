import React, { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', label, error, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
    
    return (
      <div className="w-full flex flex-col space-y-1.5">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            id={inputId}
            ref={ref}
            className={`
              w-full px-4 py-2.5 rounded-xl border bg-white/50 backdrop-blur-sm
              transition-all duration-200 outline-none
              dark:bg-black/20 dark:border-white/10 dark:text-white
              placeholder:text-gray-400 dark:placeholder:text-gray-500
              ${error 
                ? 'border-red-400 focus:ring-2 focus:ring-red-400/50' 
                : 'border-gray-200 hover:border-gray-300 focus:border-medical-blue focus:ring-2 focus:ring-medical-blue/20 dark:hover:border-white/20'
              }
              ${className}
            `}
            {...props}
          />
        </div>
        {error && (
          <span className="text-xs text-red-500 font-medium">{error}</span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
