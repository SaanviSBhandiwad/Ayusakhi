
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'medium', onClick, className = '' }) => {
  const sizeClasses = {
    small: 'text-xl md:text-2xl',
    medium: 'text-2xl md:text-3xl',
    large: 'text-3xl md:text-4xl'
  };

  return (
    <Link 
      to="/" 
      className={`font-bold flex items-center ${sizeClasses[size]} ${className}`}
      onClick={onClick}
    >
      <span className="text-primary mr-1">AYU</span>
      <span className="text-accent">SAKHI</span>
      <span className="text-xs align-top ml-1">TM</span>
    </Link>
  );
};

export default Logo;
