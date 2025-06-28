# Middlepay UI Design Patterns & Guidelines

## Overview
This document outlines the comprehensive UI design patterns, components, and guidelines for the Middlepay application. It follows the Wise Design System principles with customizations for financial services.

---

## 🎨 Design Philosophy

### Core Principles
- **Simplicity First**: Clean, uncluttered interfaces that reduce cognitive load
- **Trust & Security**: Professional appearance that builds confidence in financial decisions
- **Accessibility**: Inclusive design for all users
- **Consistency**: Unified experience across all touchpoints
- **Performance**: Static elements preferred over animated interactions where appropriate

---

## 🎯 Typography System

### Official Wise Typography Implementation

#### Product Typography (Inter Font)
```css
/* Body Text */
wise-body-default: 14px, 22px line height, 1% letter spacing, Regular (400)
wise-body-default-bold: 14px, 22px line height, Semi-bold (600)
wise-body-large: 16px, 24px line height, -0.5% letter spacing, Regular (400)
wise-body-large-bold: 16px, 24px line height, Semi-bold (600)

/* Titles */
wise-title-body: 18px, 24px line height, -1% letter spacing, Semi-bold (600)
wise-title-subsection: 22px, 28px line height, -1.5% letter spacing, Semi-bold (600)
wise-title-section: 26px, 32px line height, -1.5% letter spacing, Semi-bold (600)
wise-title-screen: 30px, 34px line height, -2.5% letter spacing, Semi-bold (600)

/* Links */
wise-link-default: 14px, Semi-bold (600), Underlined
wise-link-large: 16px, Semi-bold (600), Underlined
```

#### Marketing Typography (Wise Sans)
```css
/* Display Text */
wise-display-small: 40px, 85% line height, Bold (700), 1.5% letter spacing, UPPERCASE
wise-display-medium: 64px, 85% line height, Bold (700), 1.5% letter spacing, UPPERCASE
wise-display-large: 96px, 85% line height, Bold (700), 2% letter spacing, UPPERCASE

/* Headings */
wise-heading-1: 42px, 119% line height, Semi-bold (600)
wise-heading-2: 36px, 122.2% line height, Semi-bold (600)
wise-heading-3: 30px, 126.7% line height, Semi-bold (600)
wise-heading-4: 24px, 150% line height, Semi-bold (600)
wise-heading-5: 20px, 160% line height, Semi-bold (600)
```

### Usage Guidelines
- **Hero Headlines**: Use `wise-display-medium` or `wise-display-large`
- **Page Titles**: Use `wise-heading-1` or `wise-heading-2`
- **Section Headers**: Use `wise-title-section` or `wise-title-subsection`
- **Body Content**: Use `wise-body-large` for main content, `wise-body-default` for secondary
- **Form Labels**: Use `wise-body-default-bold` or `wise-body-large-bold`

---

## 🎭 Color Palette

### Primary Colors
```css
/* Green Palette (Primary Brand) */
wise-bright-green: #9FDB1F (Primary actions, CTAs)
wise-bright-green-hover: #80e142 (Hover states)
wise-forest-green: #163300 (Text on green backgrounds)
wise-forest-green-dark: #0d1f00 (Active states)

/* Content Colors */
wise-content-primary: #1a1a1a (Primary text)
wise-content-secondary: #666666 (Secondary text)
wise-content-tertiary: #999999 (Muted text)

/* Background Colors */
wise-neutral-bg: #fafafa (Page backgrounds)
wise-gray50: #f9fafb (Light backgrounds)
wise-gray100: #f3f4f6 (Card backgrounds)
wise-gray200: #e5e7eb (Borders)
wise-gray300: #d1d5db (Dividers)

/* Status Colors */
wise-error: #dc2626 (Errors, validation)
wise-success: #16a34a (Success states)
wise-warning: #d97706 (Warnings)
```

### Button Color System
```css
/* Primary Button */
bg-wise-bright-green + text-wise-forest-green
hover:bg-wise-bright-green-hover

/* Secondary Button */
bg-white + text-wise-button-secondary + border-wise-button-secondary
hover:bg-wise-bright-green-hover

/* Third Button (Navigation) */
bg-wise-button-third-bg + text-wise-button-secondary
hover:bg-wise-button-third-hover

/* Fourth Button (Minimal) */
bg-transparent + text-wise-content-secondary
hover:bg-wise-gray50
```

---

## 📐 Spacing & Layout

### Spacing Scale (4px Base Grid)
```css
0.25rem (4px)   - base unit
0.5rem (8px)    - between text/chips
0.75rem (12px)  - between cards
1rem (16px)     - between components
1.5rem (24px)   - mobile margins
2rem (32px)     - between sections
3rem (48px)     - large section gaps
```

### Layout Patterns
- **Max Width**: `max-w-7xl` (1280px) for main content
- **Horizontal Padding**: `px-6 lg:px-8` (24px mobile, 32px desktop)
- **Vertical Padding**: `py-20 lg:py-24` for sections
- **Grid Systems**: Use CSS Grid for form layouts, Flexbox for components

---

## 🔲 Border Radius System

### Standardized Border Radius
```css
/* Input Fields & Form Elements */
rounded-[10px] - All text inputs, selects, textareas

/* Containers & Cards */
rounded-[10px] - Summary boxes, result containers

/* Modal & Overlays */
rounded-3xl (60px) - Modal dialogs, overlays

/* Buttons & Interactive Elements */
rounded-full - Primary, secondary, third buttons (pill shape)
rounded-wise-medium (20px) - Chip components
rounded-wise-small (16px) - Small interactive elements

/* Images & Media */
rounded-wise-large (30px) - Image containers, media cards
```

### Application Rules
- **Never mix different radius sizes** in the same component group
- **Form inputs**: Always use `rounded-[10px]` for consistency
- **Buttons**: Always use `rounded-full` for pill-shaped design
- **Containers**: Use `rounded-[10px]` for summary/result boxes

---

## 🔘 Button System

### Button Variants
```tsx
// Primary - Main actions (Apply Now, Submit)
<Button variant="primary" size="large" fullWidth>
  Apply for this loan
</Button>

// Secondary - Alternative actions (Learn More, Details)
<Button variant="secondary" size="medium">
  Learn More
</Button>

// Third - Navigation/Selected states
<Button variant="third" size="small" className="rounded-full">
  Personal
</Button>

// Fourth - Minimal actions
<Button variant="fourth" size="medium">
  Cancel
</Button>
```

### Button Sizes
```tsx
small: px-4 py-2, min-h-[32px], text-wise-body-default
medium: px-6 py-3, min-h-[44px], text-wise-body-default  
large: px-8 py-4, min-h-[52px], text-wise-body-large
```

### Button States
- **Normal**: Base styling with subtle shadow
- **Hover**: Slight color change, maintain shadow
- **Active**: Scale down to 98%, darker color
- **Disabled**: 50% opacity, cursor-not-allowed
- **Loading**: Spinner with maintained button dimensions

---

## 📝 Form Design Patterns

### Input Field Standards
```tsx
// Standard Text Input
<input 
  className="w-full px-3 py-3 border-2 border-wise-gray200 rounded-[10px] 
             focus:border-wise-green focus:outline-none bg-white shadow-sm
             text-wise-body-large placeholder-wise-content-tertiary"
/>

// Large Amount Input (Hero, Application)
<input 
  className="w-full pl-8 pr-4 py-4 text-xl font-semibold border-2 border-wise-gray200 
             rounded-[10px] focus:border-wise-green focus:outline-none bg-white shadow-sm"
/>

// Select Dropdown
<select 
  className="w-full px-3 py-3 border-2 border-wise-gray200 rounded-[10px]
             focus:border-wise-green focus:outline-none bg-white"
/>

// Textarea
<textarea 
  className="w-full px-4 py-3 border-2 border-wise-gray200 rounded-[10px]
             focus:border-wise-green focus:outline-none bg-white"
  rows={3}
/>
```

### Form Layout Patterns
```tsx
// Two-column layout for application forms
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
  <div className="space-y-8">{/* Form fields */}</div>
  <div>{/* Summary/sidebar */}</div>
</div>

// Single column for simple forms
<div className="max-w-md mx-auto space-y-6">
  {/* Form fields */}
</div>
```

### Validation States
```tsx
// Error state
className={`...base-classes ${
  hasError 
    ? 'border-wise-error focus:border-wise-error' 
    : 'border-wise-gray200 focus:border-wise-green'
}`}

// Error message
{hasError && (
  <p className="mt-1 text-wise-body-default text-wise-error">
    {errorMessage}
  </p>
)}
```

---

## 🏷️ Chip Component System

### Chip Variants
```tsx
// Choice Chips (Single selection)
<Chip variant="choice" size="medium" selected={isSelected} onClick={handleClick}>
  6 months
</Chip>

// Filter Chips (Multi-selection)
<Chip variant="filter" size="large" selected={isActive} onRemove={handleRemove}>
  Personal expenses
</Chip>
```

### Chip Layouts
```tsx
// Wrapped layout for categories
<ChipGroup scrollable={false} className="!flex-wrap">
  {items.map(item => <Chip key={item.id} {...props} />)}
</ChipGroup>

// Scrollable layout for many items
<ChipGroup scrollable={true}>
  {items.map(item => <Chip key={item.id} {...props} />)}
</ChipGroup>
```

---

## 🃏 Card System

### Card Variants
```tsx
// Small Cards (Features, Benefits)
<Card size="small" className="hover:shadow-md transition-shadow">
  {content}
</Card>

// Large Cards (Hero Calculator, Important Content)
<Card size="large" className="shadow-lg">
  {content}
</Card>

// Special Cases (Static, no animations)
<Card size="large" className="shadow-lg hover:shadow-lg transition-none">
  {content}
</Card>
```

### Card Content Patterns
```tsx
// Summary Card (Loan Details, Results)
<div className="bg-wise-gray50 rounded-[10px] p-8 border border-wise-gray200">
  <h3 className="text-xl font-semibold text-wise-text-primary mb-6">
    Summary Title
  </h3>
  <div className="space-y-6">
    {/* Summary content */}
  </div>
</div>
```

---

## 🎪 Modal & Overlay Patterns

### Modal Structure
```tsx
<div className="fixed inset-0 z-50 flex items-center justify-center">
  {/* Backdrop */}
  <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
  
  {/* Modal */}
  <div className="relative w-full max-w-2xl mx-4 bg-white rounded-3xl shadow-xl 
                  max-h-[90vh] overflow-hidden">
    <div className="p-8 max-h-[90vh] overflow-y-auto">
      {/* Modal content */}
    </div>
  </div>
</div>
```

### Warning Modal (Borrowing Warning)
- **Border Radius**: `rounded-3xl` (60px)
- **Max Width**: `max-w-2xl`
- **Padding**: `p-8`
- **Background**: Semi-transparent black backdrop
- **Typography**: Use wise typography scale for hierarchy

---

## 🎯 Animation & Interaction Guidelines

### Animation Philosophy
- **Minimal Animations**: Prefer static designs over animated interactions
- **Functional Only**: Animations should serve a clear functional purpose
- **Performance First**: Avoid animations that impact performance
- **Accessibility**: Respect user preferences for reduced motion

### Approved Animations
```css
/* Color Transitions Only */
transition-colors

/* Focus States */
focus:ring-2 focus:ring-wise-bright-green focus:ring-offset-2

/* Button Active States */
active:scale-[0.98]

/* AVOID These Animations */
/* transition-all (too broad) */
/* transform animations on hover */
/* shadow transitions on forms */
```

### Static Interaction Patterns
```tsx
// Static Shadow (Good)
className="shadow-sm"

// No Hover Effects on Forms (Good)
className="focus:border-wise-green focus:outline-none"

// Minimal Button Hover (Good)
className="hover:bg-wise-bright-green-hover"
```

---

## 📊 Component Architecture

### File Structure
```
src/components/
├── ui/                 # Base components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Chip.tsx
│   └── index.ts
├── application/        # Form components
│   ├── LoanDetails.tsx
│   ├── PersonalDetails.tsx
│   └── ...
└── [Feature].tsx      # Feature components
```

### Component Props Pattern
```tsx
interface ComponentProps {
  variant?: 'primary' | 'secondary' | 'third' | 'fourth'
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  disabled?: boolean
  className?: string
  children: React.ReactNode
}
```

---

## 🎨 Visual Hierarchy Rules

### Information Architecture
1. **Hero**: Display typography, bright green accents
2. **Sections**: Heading typography, consistent spacing
3. **Content**: Body typography, proper line height
4. **Actions**: Button hierarchy, clear CTAs
5. **Details**: Muted colors, smaller typography

### Contrast Guidelines
- **Primary text**: wise-content-primary on white backgrounds
- **Secondary text**: wise-content-secondary for supporting information
- **Interactive elements**: Sufficient contrast for accessibility
- **Error states**: wise-error for clear warning communication

---

## 🔄 Data Persistence Patterns

### Form State Management
```tsx
// Session-based persistence (recommended)
const [hasAcceptedWarning, setHasAcceptedWarning] = useState(false)

// Local storage for form data
useEffect(() => {
  localStorage.setItem('middlepay-application-data', JSON.stringify(data))
}, [data])

// Data restoration
const loadSavedData = () => {
  try {
    const saved = localStorage.getItem('middlepay-application-data')
    return saved ? JSON.parse(saved) : defaultData
  } catch {
    return defaultData
  }
}
```

---

## 🔍 Testing & Quality Guidelines

### Design System Compliance
- [ ] Typography uses wise-* classes
- [ ] Colors follow approved palette
- [ ] Border radius follows standardized system
- [ ] Buttons use correct variants
- [ ] Forms have consistent styling
- [ ] Animations are minimal and purposeful

### Accessibility Checklist
- [ ] Sufficient color contrast (4.5:1 minimum)
- [ ] Keyboard navigation support
- [ ] Screen reader compatible
- [ ] Form labels properly associated
- [ ] Focus indicators visible
- [ ] Error messages clear and helpful

---

## 📱 Responsive Design Patterns

### Breakpoints
```css
sm: 640px   - Mobile landscape
md: 768px   - Tablet
lg: 1024px  - Desktop
xl: 1280px  - Large desktop
```

### Mobile-First Patterns
```tsx
// Typography scaling
className="text-wise-display-medium lg:text-wise-display-large"

// Layout adaptation
className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"

// Spacing adjustment
className="px-6 lg:px-8 py-20 lg:py-24"

// Component sizing
className="text-wise-body-default lg:text-wise-body-large"
```

---

## 🎯 Implementation Checklist

When implementing new components or features:

### Before Development
- [ ] Review existing patterns in this document
- [ ] Check for similar components in `/src/components/ui/`
- [ ] Verify color and typography choices
- [ ] Plan responsive behavior

### During Development
- [ ] Use approved typography classes
- [ ] Follow border radius standards
- [ ] Implement proper spacing
- [ ] Add appropriate focus states
- [ ] Test keyboard navigation

### After Development
- [ ] Verify visual consistency
- [ ] Test responsive behavior
- [ ] Validate accessibility
- [ ] Update this document if new patterns emerge

---

## 🔗 Related Resources

- [Wise Design System](https://wise.design/) - Official design system reference
- [Tailwind CSS](https://tailwindcss.com/) - Utility framework documentation
- [React Accessibility](https://reactjs.org/docs/accessibility.html) - Accessibility guidelines

---

*This document should be updated as the design system evolves and new patterns are established.*