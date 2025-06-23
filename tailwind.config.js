/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Wise brand colors - Official design system
        wise: {
          // Core brand colors (Primary Palette)
          'bright-green': '#9FE870',    // Bright Green (Sulu) - main brand color
          'forest-green': '#163300',    // Forest Green (Deep Fir) - logo, titles
          'white': '#FFFFFF',           // Base Light - page backgrounds
          
          // Semantic colors (Sentiment/Feedback)
          'success': '#2F5711',         // Sentiment Positive - success states
          'error': '#A8200D',           // Sentiment Negative - error states  
          'warning': '#EDC843',         // Sentiment Warning - warning states
          
          // Support colors (Neutral/Base)
          'base-dark': '#121511',       // Deep gray/near black for dark themes
          'neutral-bg': 'rgba(22, 51, 0, 0.08)', // Background Neutral - very light gray
          'gray50': '#F7F9FC',          // Light background
          'gray100': '#EBEEF2',         // Card backgrounds  
          'gray200': '#D0D8E0',         // Borders
          
          // Content hierarchy (text colors)
          'content-primary': '#163300',    // Primary text - Forest Green
          'content-secondary': '#2F5711',  // Secondary text - darker green
          'content-tertiary': 'rgba(22, 51, 0, 0.6)', // Tertiary text - muted
          
          // Text colors (legacy aliases)
          'text-primary': '#163300',    // Alias for content-primary
          'text-secondary': '#2F5711',  // Alias for content-secondary
          'text-muted': 'rgba(22, 51, 0, 0.6)', // Alias for content-tertiary
          
          // Legacy support colors
          green: '#9FE870',             // Alias for bright-green
          darkgreen: '#2F5711',         // Darker green for hover states
          navy: '#163300',              // Alias for forest-green
        },
        
        // Keep existing structure for backward compatibility
        primary: {
          dark: '#163300',
          blue: '#9FE870',
          green: '#9FE870',
        }
      },
      fontFamily: {
        sans: [
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
      },
      fontSize: {
        // Wise's typography scale - enhanced for better readability
        'xs': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }],    // 14px
        'sm': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],        // 16px
        'base': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],  // 18px
        'lg': ['1.25rem', { lineHeight: '1.5', fontWeight: '400' }],     // 20px
        'xl': ['1.375rem', { lineHeight: '1.5', fontWeight: '500' }],    // 22px
        '2xl': ['1.625rem', { lineHeight: '1.4', fontWeight: '600' }],   // 26px
        '3xl': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],       // 32px
        '4xl': ['2.5rem', { lineHeight: '1.25', fontWeight: '700' }],    // 40px
        '5xl': ['3.25rem', { lineHeight: '1.2', fontWeight: '700' }],    // 52px
      },
      spacing: {
        // Wise's spacing system (4px base)
        '1': '0.25rem',    // 4px
        '2': '0.5rem',     // 8px
        '3': '0.75rem',    // 12px
        '4': '1rem',       // 16px
        '5': '1.25rem',    // 20px
        '6': '1.5rem',     // 24px
        '8': '2rem',       // 32px
        '10': '2.5rem',    // 40px
        '12': '3rem',      // 48px
        '16': '4rem',      // 64px
        '20': '5rem',      // 80px
        '24': '6rem',      // 96px
      },
      borderRadius: {
        'none': '0',
        'sm': '0.25rem',    // 4px - small elements
        'md': '0.5rem',     // 8px - buttons, inputs
        'lg': '0.75rem',    // 12px - cards
        'xl': '1rem',       // 16px - large cards
        '2xl': '1.5rem',    // 24px - hero sections
        'full': '9999px',
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