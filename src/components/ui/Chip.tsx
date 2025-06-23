import React from 'react';

export type ChipVariant = 'choice' | 'filter';
export type ChipSize = 'small' | 'medium' | 'large';

interface BaseChipProps {
  children: React.ReactNode;
  variant?: ChipVariant;
  size?: ChipSize;
  selected?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  onRemove?: () => void;
  onClick?: () => void;
  className?: string;
}

const getChipClasses = (
  variant: ChipVariant, 
  size: ChipSize, 
  selected: boolean, 
  disabled: boolean,
  hasIcon: boolean,
  hasRemove: boolean
): string => {
  const baseClasses = [
    'inline-flex',
    'items-center',
    'justify-center',
    'border',
    'transition-all',
    'duration-200',
    'ease-out',
    'cursor-pointer',
    'select-none',
    'whitespace-nowrap',
    'font-medium'
  ];

  // Size-specific classes
  const sizeClasses = {
    small: [
      'text-wise-body-default',
      'h-8',
      hasIcon ? 'pl-2' : 'px-3',
      hasRemove ? 'pr-2' : 'px-3',
      'rounded-full'
    ],
    medium: [
      'text-wise-body-large',
      'h-10',
      hasIcon ? 'pl-3' : 'px-4',
      hasRemove ? 'pr-3' : 'px-4',
      'rounded-full'
    ],
    large: [
      'text-wise-title-body',
      'h-12',
      hasIcon ? 'pl-4' : 'px-6',
      hasRemove ? 'pr-4' : 'px-6',
      'rounded-full'
    ]
  };

  // Variant and state-specific classes
  const variantClasses = (() => {
    if (disabled) {
      return [
        'bg-wise-gray100',
        'border-wise-gray200',
        'text-wise-gray400',
        'cursor-not-allowed'
      ];
    }

    if (variant === 'choice') {
      if (selected) {
        return [
          'bg-wise-bright-green',
          'border-wise-bright-green',
          'text-wise-forest-green',
          'shadow-sm',
          'hover:bg-wise-bright-green-hover',
          'hover:border-wise-bright-green-hover',
          'hover:text-wise-forest-green-dark',
          'active:scale-[0.98]'
        ];
      } else {
        return [
          'bg-white',
          'border-wise-border-primary',
          'text-wise-content-primary',
          'hover:bg-wise-gray50',
          'hover:border-wise-border-secondary',
          'active:bg-wise-gray100'
        ];
      }
    } else { // filter variant
      if (selected) {
        return [
          'bg-wise-button-third-bg',
          'border-wise-button-secondary',
          'text-wise-button-secondary',
          'shadow-sm',
          'hover:bg-wise-button-third-hover',
          'active:scale-[0.98]'
        ];
      } else {
        return [
          'bg-white',
          'border-wise-border-primary',
          'text-wise-content-secondary',
          'hover:bg-wise-gray50',
          'hover:border-wise-border-secondary',
          'active:bg-wise-gray100'
        ];
      }
    }
  })();

  return [
    ...baseClasses,
    ...sizeClasses[size],
    ...variantClasses
  ].join(' ');
};

export const Chip: React.FC<BaseChipProps> = ({
  children,
  variant = 'choice',
  size = 'medium',
  selected = false,
  disabled = false,
  icon,
  onRemove,
  onClick,
  className = ''
}) => {
  const hasIcon = !!icon;
  const hasRemove = !!onRemove;
  const chipClasses = getChipClasses(variant, size, selected, disabled, hasIcon, hasRemove);

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!disabled && onRemove) {
      onRemove();
    }
  };

  return (
    <div 
      className={`${chipClasses} ${className}`}
      onClick={handleClick}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-pressed={variant === 'choice' ? selected : undefined}
      aria-selected={variant === 'filter' ? selected : undefined}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      {icon && (
        <span className={`${size === 'small' ? 'mr-1' : size === 'medium' ? 'mr-2' : 'mr-3'} flex-shrink-0`}>
          {icon}
        </span>
      )}
      
      <span className="truncate">
        {children}
      </span>
      
      {hasRemove && (
        <button
          onClick={handleRemove}
          className={`${size === 'small' ? 'ml-1' : size === 'medium' ? 'ml-2' : 'ml-3'} flex-shrink-0 rounded-full hover:bg-black/10 transition-colors p-0.5 focus:outline-none focus:ring-2 focus:ring-wise-bright-green focus:ring-offset-1`}
          aria-label="Remove"
          tabIndex={-1}
        >
          <svg 
            className={`${size === 'small' ? 'w-3 h-3' : size === 'medium' ? 'w-4 h-4' : 'w-5 h-5'}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>
      )}
    </div>
  );
};

// Chip Group component for managing multiple chips
interface ChipGroupProps {
  children: React.ReactNode;
  className?: string;
  scrollable?: boolean;
}

export const ChipGroup: React.FC<ChipGroupProps> = ({
  children,
  className = '',
  scrollable = true
}) => {
  const groupClasses = scrollable 
    ? 'flex gap-2 overflow-x-auto scrollbar-hide pb-1' 
    : 'flex flex-wrap gap-2';

  return (
    <div className={`${groupClasses} ${className}`}>
      {children}
    </div>
  );
};

// Compound component export
(Chip as any).Group = ChipGroup;

export default Chip;