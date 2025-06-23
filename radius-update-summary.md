# Wise Design System Radius Update Summary

Based on analysis of https://wise.design/foundations/radius, I've updated all radius values throughout the application to meet Wise's minimum standards.

## Key Changes Made

### 1. **Tailwind Config Updated** (`tailwind.config.js`)
- **Before**: Default Tailwind radius (xs: 2px, sm: 4px, md: 6px, lg: 8px, xl: 12px)
- **After**: Wise-compliant minimum radius (all 16px+)
  - `xs/sm/md`: 16px (wise-small)
  - `lg`: 20px (wise-medium) 
  - `xl`: 30px (wise-large)
  - `2xl`: 40px (wise-x-large)
  - `3xl`: 60px (wise-2x-large)

### 2. **CSS Hard-coded Values Updated** (`src/index.css`)
- **Card small**: 12px → 16px (wise-small)
- **Card large**: 16px → 20px (wise-medium)

### 3. **Component-specific Updates**

#### **Form Components**
- All input fields: `rounded-lg` → `rounded-wise-small` (16px)
- Select dropdowns: `rounded-lg` → `rounded-wise-small` (16px)
- Textarea elements: `rounded-lg` → `rounded-wise-small` (16px)

#### **Card Components**
- Small cards: `rounded-[12px]` → `rounded-wise-small` (16px)
- Large cards: `rounded-[16px]` → `rounded-wise-medium` (20px)
- Application forms: `rounded-xl` → `rounded-wise-large` (30px)

#### **Button & Interactive Elements**
- Form buttons: `rounded-lg` → `rounded-wise-medium` (20px)
- CTA buttons: `rounded-lg` → `rounded-wise-medium` (20px)
- Icon buttons: `rounded-lg` → `rounded-wise-medium` (20px)

#### **Layout Components**
- Hero sections: `rounded-2xl` → `rounded-wise-x-large` (40px)
- Feature cards: `rounded-2xl` → `rounded-wise-x-large` (40px)
- Modal/login containers: `rounded-xl` → `rounded-wise-large` (30px)

### 4. **Files Updated**
- `/tailwind.config.js` - Core radius tokens
- `/src/index.css` - Card component CSS
- `/src/components/ui/Card.tsx` - Card component classes
- `/src/components/application/LoanDetails.tsx` - Form inputs
- `/src/components/Hero.tsx` - Calculator and inputs
- `/src/pages/Login.tsx` - Login form and buttons
- `/src/pages/Contact.tsx` - Contact form and sections
- `/src/pages/Loans.tsx` - Loan selection and form
- `/src/components/Footer.tsx` - Social media icons
- `/src/components/Header.tsx` - Navigation elements
- `/src/components/application/ConfirmSubmit.tsx` - Form containers
- `/src/pages/About.tsx` - Feature cards and images

## Wise Design Compliance

### **Minimum Radius Standards Met**
✅ **16px minimum**: All small elements now use 16px+ radius
✅ **20px medium**: Card and form elements use 20px for better prominence  
✅ **30px+ large**: Hero sections and prominent containers use 30px+
✅ **40px+ x-large**: Main feature sections use 40px+ for maximum prominence

### **Design Impact**
- **Bolder appearance**: More rounded corners create the "bolder and more expressive appearance" specified by Wise
- **Better content breathing**: Larger radius with proper padding ensures content has enough room
- **Consistent hierarchy**: Different radius sizes create clear visual hierarchy
- **Mobile responsive**: Proper scaling from mobile (10-48px) to desktop (16-60px)

### **Component Categories**
1. **Small elements** (chips, small buttons): 16px (wise-small)
2. **Medium elements** (inputs, cards, buttons): 20px (wise-medium)  
3. **Large elements** (containers, forms): 30px (wise-large)
4. **X-Large elements** (hero sections, features): 40px (wise-x-large)
5. **2X-Large elements** (main sections): 60px (wise-2x-large)

All radius values now follow Wise's official specification for creating a more distinctive and expressive visual experience.