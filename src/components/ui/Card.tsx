import React from 'react';

export type CardSize = 'small' | 'large';
export type CardVariant = 'default' | 'promotion' | 'alert' | 'balance';

interface BaseCardProps {
  size?: CardSize;
  variant?: CardVariant;
  interactive?: boolean;
  dismissible?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  onDismiss?: () => void;
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

const getCardClasses = (size: CardSize, variant: CardVariant, interactive: boolean, dismissible: boolean) => {
  const baseClasses = [
    'card-wise-base',
    'bg-white',
    'border',
    'border-wise-border-primary'
  ];

  // Size-specific classes
  const sizeClasses = {
    small: [
      'card-wise-small',
      'min-h-[88px]',
      'max-h-[300px]',
      'p-4',
      'rounded-wise-small'
    ],
    large: [
      'card-wise-large', 
      'min-h-[300px]',
      'p-6',
      'rounded-wise-medium'
    ]
  };

  // Variant-specific classes (for future use)
  const variantClasses = {
    default: [],
    promotion: ['bg-wise-bright-green/5', 'border-wise-bright-green/20'],
    alert: ['bg-wise-error/5', 'border-wise-error/20'],
    balance: ['bg-wise-success/5', 'border-wise-success/20']
  };

  // Interactive classes
  const interactiveClasses = interactive ? [
    'card-wise-clickable',
    'cursor-pointer',
    'hover:shadow-card-hover',
    'hover:border-wise-border-secondary',
    'hover:-translate-y-0.5',
    'active:translate-y-0',
    'active:shadow-card'
  ] : [];

  // Dismissible classes
  const dismissibleClasses = dismissible ? ['card-wise-dismissible'] : [];

  return [
    ...baseClasses,
    ...sizeClasses[size],
    ...variantClasses[variant],
    ...interactiveClasses,
    ...dismissibleClasses
  ].join(' ');
};

export const Card: React.FC<BaseCardProps> = ({
  size = 'small',
  variant = 'default',
  interactive = false,
  dismissible = false,
  className = '',
  children,
  onClick,
  onDismiss
}) => {
  const cardClasses = getCardClasses(size, variant, interactive, dismissible);

  return (
    <div 
      className={`${cardClasses} ${className}`}
      onClick={interactive ? onClick : undefined}
    >
      {dismissible && (
        <button 
          className="card-wise-dismiss"
          onClick={(e) => {
            e.stopPropagation();
            onDismiss?.();
          }}
          aria-label="Dismiss"
        >
          <svg 
            className="w-4 h-4" 
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
      {children}
    </div>
  );
};

export const CardHeader: React.FC<CardHeaderProps> = ({ 
  children, 
  className = '' 
}) => (
  <div className={`card-wise-header ${className}`}>
    {children}
  </div>
);

export const CardBody: React.FC<CardBodyProps> = ({ 
  children, 
  className = '' 
}) => (
  <div className={`card-wise-body ${className}`}>
    {children}
  </div>
);

export const CardFooter: React.FC<CardFooterProps> = ({ 
  children, 
  className = '' 
}) => (
  <div className={`card-wise-footer ${className}`}>
    {children}
  </div>
);

// Compound component export
(Card as any).Header = CardHeader;
(Card as any).Body = CardBody;
(Card as any).Footer = CardFooter;

export default Card;