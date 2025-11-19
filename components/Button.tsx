import React from 'react';
import { TALLY_LINK } from '../constants';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  fullWidth?: boolean;
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  fullWidth = false,
  icon = true 
}) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-brand-600 text-white hover:bg-brand-700 focus:ring-brand-500",
    secondary: "bg-white text-brand-700 border border-brand-200 hover:bg-brand-50 focus:ring-brand-500",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white/10 focus:ring-white"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <a 
      href={TALLY_LINK} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`${baseStyle} ${variants[variant]} ${widthClass} ${className}`}
    >
      {children}
      {icon && <ArrowRight className="ml-2 w-5 h-5" />}
    </a>
  );
};

export default Button;