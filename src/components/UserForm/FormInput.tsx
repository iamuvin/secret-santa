import React from 'react';
import { FormInputProps } from './types';

export function FormInput({
  icon,
  label,
  type,
  value,
  onChange,
  placeholder,
  required,
  pattern,
  min,
  max
}: FormInputProps) {
  return (
    <div className="relative group">
      <label className="block text-sm font-medium text-white/80 mb-2 flex items-center gap-2">
        {icon}
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        min={min}
        max={max}
        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
          text-white placeholder-white/30
          focus:border-green-400 focus:ring-2 focus:ring-green-400/20 
          transition-all duration-200
          group-hover:border-white/20
          [color-scheme:dark]"
      />
    </div>
  );
}