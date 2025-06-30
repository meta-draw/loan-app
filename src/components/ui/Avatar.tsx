import React from 'react';

interface AvatarProps {
  name: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ 
  name, 
  size = 'md',
  className = '' 
}) => {
  const initials = name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-32 h-32 text-2xl',
    lg: 'w-40 h-40 text-3xl'
  };

  return (
    <div 
      className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-wise-bright-green to-wise-success flex items-center justify-center text-wise-forest-green font-bold ${className}`}
    >
      {initials}
    </div>
  );
};