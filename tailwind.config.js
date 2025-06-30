/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Official Wise Design System Colors
        wise: {
          // Core Brand Colors
          'bright-green': '#9FE870',    // Primary brand color
          'forest-green': '#163300',    // Secondary brand color
          'white': '#FFFFFF',           // Base white
          
          // Content Colors (Official Wise Neutrals)
          'content-primary': '#0E0F0C',     // Content Primary - Dark grey
          'content-secondary': '#454745',   // Content Secondary - Medium grey  
          'content-tertiary': '#6A6C6A',    // Content Tertiary - Light grey
          
          // Interactive Colors
          'interactive-primary': '#163300',  // Forest Green for primary actions
          'interactive-accent': '#9FE870',   // Bright Green for accents
          'interactive-secondary': '#6A6C6A', // Neutral grey for secondary actions
          
          // Semantic Colors (Official Wise Sentiment)
          'negative': '#A8200D',        // Dark red for errors
          'positive': '#2F5711',        // Dark green for success
          'warning': '#EDC843',         // Yellow for warnings
          
          // Alias for backward compatibility
          'error': '#A8200D',
          'success': '#2F5711',
          
          // Background and Surface Colors
          'surface-primary': '#FFFFFF',      // Primary surface (white)
          'surface-secondary': '#F8F9FA',    // Secondary surface (light grey)
          'surface-tertiary': '#F1F3F4',     // Tertiary surface (medium light grey)
          
          // Border Colors
          'border-primary': '#E8EAED',       // Primary borders
          'border-secondary': '#DADCE0',     // Secondary borders
          'border-accent': '#9FE870',        // Accent borders
          
          // Neutral Greys (Official Scale)
          'gray50': '#F8F9FA',
          'gray100': '#F1F3F4', 
          'gray200': '#E8EAED',
          'gray300': '#D0D8E0',
          'gray400': '#BDC1C6',
          'gray500': '#9AA0A6',
          'gray600': '#6A6C6A',
          'gray700': '#454745',
          'gray800': '#2D2E2D',
          'gray900': '#0E0F0C',
          
          // Legacy aliases
          'neutral-bg': '#F8F9FA',
          green: '#9FE870',
          darkgreen: '#2F5711',
          navy: '#163300',
          
          // Button hover state colors
          'bright-green-hover': '#80e142',
          'forest-green-dark': '#0d1f00',
          
          // Button variant colors
          'button-secondary': 'rgb(22, 51, 0)', // #163300
          'button-third-bg': 'rgb(226, 246, 213)', // #e2f6d5
          'button-third-hover': '#d3f2c0',
        },
        
        // Keep existing structure for backward compatibility
        primary: {
          dark: '#163300',
          blue: '#9FE870',
          green: '#9FE870',
        }
      },
      
      fontFamily: {
        // Primary font family for body text and general content
        'sans': [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'system-ui',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        // Display font for headings and prominent text
        'display': [
          'Montserrat',
          'DM Sans',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'system-ui',
          'sans-serif',
        ],
        // Inter font for consistent typography (Wise Design System)
        'inter': [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'system-ui',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        // Monospace font for code, numbers, and data
        'mono': [
          'JetBrains Mono',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
      fontSize: {
        // Official Wise Design System Typography Scale - Exact Specifications
        
        // Product Typography (Inter)
        'wise-body-default': ['0.875rem', { lineHeight: '1.571', fontWeight: '400', letterSpacing: '0.01em' }],     // 14px, 22px line height, 1% letter spacing
        'wise-body-default-bold': ['0.875rem', { lineHeight: '1.571', fontWeight: '600' }],                        // 14px, 22px line height, Semi-bold
        'wise-body-large': ['1rem', { lineHeight: '1.5', fontWeight: '400', letterSpacing: '-0.005em' }],           // 16px, 24px line height, -0.5% letter spacing
        'wise-body-large-bold': ['1rem', { lineHeight: '1.5', fontWeight: '600' }],                                 // 16px, 24px line height, Semi-bold
        
        'wise-title-body': ['1.125rem', { lineHeight: '1.333', fontWeight: '600', letterSpacing: '-0.01em' }],      // 18px, 24px line height, -1% letter spacing
        'wise-title-subsection': ['1.375rem', { lineHeight: '1.273', fontWeight: '600', letterSpacing: '-0.015em' }], // 22px, 28px line height, -1.5% letter spacing
        'wise-title-section': ['1.625rem', { lineHeight: '1.231', fontWeight: '600', letterSpacing: '-0.015em' }],  // 26px, 32px line height, -1.5% letter spacing
        'wise-title-screen': ['1.875rem', { lineHeight: '1.133', fontWeight: '600', letterSpacing: '-0.025em' }],   // 30px, 34px line height, -2.5% letter spacing
        
        'wise-link-default': ['0.875rem', { lineHeight: '1.571', fontWeight: '600', textDecoration: 'underline' }], // 14px, Semi-bold, Underlined
        'wise-link-large': ['1rem', { lineHeight: '1.5', fontWeight: '600', textDecoration: 'underline' }],         // 16px, Semi-bold, Underlined
        
        // Marketing Typography (Wise Sans + Inter)
        'wise-display-small': ['2.5rem', { lineHeight: '0.85', fontWeight: '700', letterSpacing: '0.015em', textTransform: 'uppercase' }],   // 40px, Bold, 85% line height, 1.5% letter spacing
        'wise-display-medium': ['4rem', { lineHeight: '0.85', fontWeight: '900', letterSpacing: '0.015em', textTransform: 'uppercase', fontFamily: 'Montserrat' }],    // 64px, Black, 85% line height, 1.5% letter spacing, Montserrat  
        'wise-display-large': ['6rem', { lineHeight: '0.85', fontWeight: '700', letterSpacing: '0.02em', textTransform: 'uppercase' }],      // 96px, Bold, 85% line height, 2% letter spacing
        
        'wise-heading-5': ['1.25rem', { lineHeight: '1.6', fontWeight: '600' }],        // 20px, Semi-bold
        'wise-heading-4': ['1.5rem', { lineHeight: '1.5', fontWeight: '600' }],         // 24px, Semi-bold
        'wise-heading-3': ['1.875rem', { lineHeight: '1.267', fontWeight: '700', fontFamily: 'Montserrat' }],     // 30px, Bold, Montserrat
        'wise-heading-2': ['2.25rem', { lineHeight: '1.222', fontWeight: '700', fontFamily: 'Montserrat' }],      // 36px, Bold, Montserrat
        'wise-heading-1': ['2.625rem', { lineHeight: '1.19', fontWeight: '800', fontFamily: 'Montserrat' }],      // 42px, Extra-bold, Montserrat
        
        'wise-marketing-body-3': ['0.875rem', { lineHeight: '1.571', fontWeight: '400' }],  // 14px, Regular
        'wise-marketing-body-2': ['1rem', { lineHeight: '1.5', fontWeight: '400' }],        // 16px, Regular
        'wise-marketing-body-1': ['1.125rem', { lineHeight: '1.556', fontWeight: '400' }],  // 18px, Regular
        
        // Legacy Tailwind mappings (mapped to Wise equivalents)
        'xs': ['0.875rem', { lineHeight: '1.571', fontWeight: '400', letterSpacing: '0.01em' }],     // wise-body-default
        'sm': ['1rem', { lineHeight: '1.5', fontWeight: '400', letterSpacing: '-0.005em' }],         // wise-body-large
        'base': ['1rem', { lineHeight: '1.5', fontWeight: '400', letterSpacing: '-0.005em' }],       // wise-body-large
        'lg': ['1.125rem', { lineHeight: '1.333', fontWeight: '600', letterSpacing: '-0.01em' }],    // wise-title-body
        'xl': ['1.375rem', { lineHeight: '1.273', fontWeight: '600', letterSpacing: '-0.015em' }],   // wise-title-subsection
        '2xl': ['1.875rem', { lineHeight: '1.133', fontWeight: '600', letterSpacing: '-0.025em' }],  // wise-title-screen
        '3xl': ['2.25rem', { lineHeight: '1.222', fontWeight: '600' }],                              // wise-heading-2
        '4xl': ['2.625rem', { lineHeight: '1.19', fontWeight: '600' }],                              // wise-heading-1
        '5xl': ['4rem', { lineHeight: '0.85', fontWeight: '700', letterSpacing: '0.015em' }],        // wise-display-medium
        '6xl': ['6rem', { lineHeight: '0.85', fontWeight: '700', letterSpacing: '0.02em' }],         // wise-display-large
      },
      spacing: {
        // Official Wise Spacing Tokens (4px base grid)
        '0': '0',
        'px': '1px',
        '0.5': '0.125rem',   // 2px
        '1': '0.25rem',      // 4px - base unit
        '1.5': '0.375rem',   // 6px
        '2': '0.5rem',       // 8px - between text/chips
        '2.5': '0.625rem',   // 10px
        '3': '0.75rem',      // 12px - between cards
        '3.5': '0.875rem',   // 14px
        '4': '1rem',         // 16px - default component spacing
        '5': '1.25rem',      // 20px
        '6': '1.5rem',       // 24px - mobile screen spacing
        '7': '1.75rem',      // 28px
        '8': '2rem',         // 32px - between sections
        '9': '2.25rem',      // 36px
        '10': '2.5rem',      // 40px
        '11': '2.75rem',     // 44px
        '12': '3rem',        // 48px
        '14': '3.5rem',      // 56px
        '16': '4rem',        // 64px
        '20': '5rem',        // 80px
        '24': '6rem',        // 96px
        '28': '7rem',        // 112px
        '32': '8rem',        // 128px
        
        // Semantic spacing tokens
        'text-gap': '0.5rem',      // 8px - between text elements
        'card-gap': '0.75rem',     // 12px - between cards
        'section-gap': '2rem',     // 32px - between sections
        'mobile-margin': '1.5rem', // 24px - mobile screen margins
      },
      borderRadius: {
        // Official Wise Border Radius System
        'none': '0',
        'xs': '1rem',       // 16px - minimum Wise radius (wise-small)
        'sm': '1rem',       // 16px - minimum Wise radius (wise-small)
        'md': '1rem',       // 16px - minimum Wise radius (wise-small)
        'lg': '1.25rem',    // 20px - wise-medium
        'xl': '1.875rem',   // 30px - wise-large
        '2xl': '2.5rem',    // 40px - wise-x-large
        '3xl': '3.75rem',   // 60px - wise-2x-large
        'full': '9999px',   // Perfect circles
        // Wise Design System Border Radius Tokens
        'wise-small': '16px',
        'wise-medium': '20px', 
        'wise-large': '30px',
        'wise-x-large': '40px',
        'wise-2x-large': '60px',
        // Mobile versions (for responsive design)
        'wise-small-mobile': '10px',
        'wise-medium-mobile': '16px',
        'wise-large-mobile': '24px', 
        'wise-x-large-mobile': '32px',
        'wise-2x-large-mobile': '48px',
      },
      boxShadow: {
        // Wise's shadow system
        'none': 'none',
        'sm': '0 1px 2px 0 rgba(22, 54, 92, 0.05)',
        'md': '0 4px 6px -1px rgba(22, 54, 92, 0.1), 0 2px 4px -1px rgba(22, 54, 92, 0.06)',
        'lg': '0 10px 15px -3px rgba(22, 54, 92, 0.1), 0 4px 6px -2px rgba(22, 54, 92, 0.05)',
        'xl': '0 20px 25px -5px rgba(22, 54, 92, 0.1), 0 10px 10px -5px rgba(22, 54, 92, 0.04)',
        'card': '0 4px 16px rgba(22, 54, 92, 0.08)',
        'button': '0 2px 4px rgba(22, 54, 92, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      }
    },
  },
  plugins: [],
}