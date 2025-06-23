import React from 'react';
import { Link } from 'react-router-dom';

export type ButtonVariant = 'primary' | 'secondary' | 'third' | 'fourth';
export type ButtonSize = 'small' | 'medium' | 'large';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  negative?: boolean; // For destructive actions
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

interface ButtonProps extends BaseButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
}

interface LinkButtonProps extends BaseButtonProps {
  to: string;
  external?: boolean;
}

const getButtonClasses = (
  variant: ButtonVariant, 
  size: ButtonSize, 
  fullWidth: boolean, 
  disabled: boolean, 
  loading: boolean,
  negative: boolean
) => {
  // Base classes following Wise design system
  const baseClasses = [
    'inline-flex',
    'items-center',
    'justify-center',
    'font-inter',
    'font-semibold',
    'transition-all',
    'duration-200',
    'ease-in-out',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'focus:ring-wise-bright-green',
    'disabled:cursor-not-allowed',
    'whitespace-nowrap',
    'text-center',
    'border',
    'rounded-full', // Wise uses pill-shaped buttons (fully rounded)
    ...(disabled ? ['opacity-50'] : []),
    ...(fullWidth ? ['w-full'] : []),
    ...(loading ? ['cursor-wait'] : [])
  ];

  // Size-specific classes based on Wise typography system
  // Using generous padding for pill-shaped buttons to ensure content has room to breathe
  const sizeClasses = {
    small: [
      'px-4', 'py-2', // 16px horizontal, 8px vertical - more padding for pill shape
      'text-wise-body-default', // 14px Wise spec
      'leading-[22px]',
      'tracking-[0.0125em]', // 1.25% letter spacing
      'min-h-[32px]'
    ],
    medium: [
      'px-6', 'py-3', // 24px horizontal, 12px vertical - more padding for pill shape
      'text-wise-body-default', // 14px Wise spec
      'leading-[22px]',
      'tracking-[0.0125em]', // 1.25% letter spacing
      'min-h-[44px]'
    ],
    large: [
      'px-8', 'py-4', // 32px horizontal, 16px vertical - more padding for pill shape
      'text-wise-body-large', // 16px Wise spec
      'leading-6', // 24px
      'tracking-[0.005em]', // 0.5% letter spacing
      'min-h-[52px]'
    ]
  };

  // Variant-specific classes for the four button types
  const getVariantClasses = (): string[] => {
    const baseVariant = negative ? `${variant}-negative` : variant;
    
    switch (baseVariant) {
      case 'primary':
        // Primary buttons: bright green bg, forest green text, hover to lighter green bg with darker text
        return [
          'bg-wise-bright-green',
          'text-wise-forest-green', // #163300
          'border-wise-bright-green',
          'hover:bg-wise-bright-green-hover', // #80e142
          'hover:border-wise-bright-green-hover',
          'hover:text-wise-forest-green-dark', // #0d1f00
          'active:bg-wise-bright-green-hover',
          'active:scale-[0.98]',
          'focus:ring-wise-bright-green'
        ];
        
      case 'secondary':
        // Secondary buttons (learn, etc.): white bg, forest green border & text, hover same as primary
        return [
          'bg-white',
          'text-wise-button-secondary', // rgb(22, 51, 0)
          'border-wise-button-secondary',
          'border-[1px]',
          'hover:bg-wise-bright-green-hover', // #80e142
          'hover:border-wise-bright-green-hover',
          'hover:text-wise-forest-green-dark', // #0d1f00
          'active:bg-wise-bright-green-hover',
          'active:scale-[0.98]',
          'focus:ring-wise-button-secondary'
        ];
        
      case 'third':
        // Third buttons (navigation like "personal"): light green bg, forest green text
        return [
          'bg-wise-button-third-bg', // rgb(226, 246, 213)
          'text-wise-button-secondary', // rgb(22, 51, 0)
          'border-wise-button-third-bg',
          'hover:bg-wise-button-third-hover', // #d3f2c0
          'hover:border-wise-button-third-hover',
          'hover:text-wise-button-secondary',
          'active:bg-wise-button-third-hover',
          'active:scale-[0.98]',
          'focus:ring-wise-button-secondary'
        ];
        
      case 'fourth':
        // Fourth buttons (navigation like "about", "loan"): transparent/minimal styling
        return [
          'bg-transparent',
          'text-wise-content-secondary',
          'border-transparent',
          'hover:bg-wise-gray50',
          'hover:text-wise-content-primary',
          'active:bg-wise-gray100',
          'active:scale-[0.98]',
          'focus:ring-wise-gray300'
        ];
        
      // Negative variants
      case 'primary-negative':
        return [
          'bg-wise-error',
          'text-white',
          'border-wise-error',
          'hover:bg-red-700',
          'hover:border-red-700',
          'active:bg-red-800',
          'active:scale-[0.98]',
          'focus:ring-wise-error'
        ];
        
      case 'secondary-negative':
        return [
          'bg-white',
          'text-wise-error',
          'border-wise-error',
          'border-[1px]',
          'hover:bg-wise-error',
          'hover:text-white',
          'active:bg-wise-error',
          'active:scale-[0.98]',
          'focus:ring-wise-error'
        ];
        
      case 'third-negative':
        return [
          'bg-red-50',
          'text-wise-error',
          'border-red-50',
          'hover:bg-red-100',
          'hover:border-red-100',
          'active:bg-red-200',
          'active:scale-[0.98]',
          'focus:ring-wise-error'
        ];
        
      case 'fourth-negative':
        return [
          'bg-transparent',
          'text-wise-error',
          'border-transparent',
          'hover:bg-red-50',
          'hover:text-red-700',
          'active:bg-red-100',
          'active:scale-[0.98]',
          'focus:ring-wise-error'
        ];
        
      default:
        // Fallback to primary
        return [
          'bg-wise-bright-green',
          'text-wise-forest-green',
          'border-wise-bright-green',
          'hover:bg-wise-bright-green-hover',
          'hover:border-wise-bright-green-hover',
          'hover:text-wise-forest-green-dark',
          'active:bg-wise-bright-green-hover',
          'active:scale-[0.98]',
          'focus:ring-wise-bright-green'
        ];
    }
  };

  return [...baseClasses, ...sizeClasses[size], ...getVariantClasses()].join(' ');
};

const ButtonContent: React.FC<{
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
}> = ({ children, icon, iconPosition = 'right', loading }) => {
  if (loading) {
    return (
      <>
        <svg 
          className="animate-spin -ml-1 mr-2 h-4 w-4" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        {children}
      </>
    );
  }

  if (icon) {
    return iconPosition === 'left' ? (
      <>
        <span className="mr-2 flex-shrink-0">{icon}</span>
        {children}
      </>
    ) : (
      <>
        {children}
        <span className="ml-2 flex-shrink-0">{icon}</span>
      </>
    );
  }

  return <>{children}</>;
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  loading = false,
  negative = false,
  type = 'button',
  onClick,
  children,
  className = '',
  icon,
  iconPosition = 'right'
}) => {
  const buttonClasses = getButtonClasses(variant, size, fullWidth, disabled, loading, negative);
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${buttonClasses} ${className}`}
    >
      <ButtonContent icon={icon} iconPosition={iconPosition} loading={loading}>
        {children}
      </ButtonContent>
    </button>
  );
};

export const LinkButton: React.FC<LinkButtonProps> = ({
  to,
  external = false,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  loading = false,
  negative = false,
  children,
  className = '',
  icon,
  iconPosition = 'right'
}) => {
  const buttonClasses = getButtonClasses(variant, size, fullWidth, disabled, loading, negative);
  
  const content = (
    <ButtonContent icon={icon} iconPosition={iconPosition} loading={loading}>
      {children}
    </ButtonContent>
  );
  
  if (external) {
    return (
      <a
        href={to}
        className={`${buttonClasses} ${className} ${disabled ? 'pointer-events-none' : ''}`}
        {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      >
        {content}
      </a>
    );
  }
  
  return (
    <Link
      to={to}
      className={`${buttonClasses} ${className} ${disabled ? 'pointer-events-none' : ''}`}
    >
      {content}
    </Link>
  );
};

export default Button;