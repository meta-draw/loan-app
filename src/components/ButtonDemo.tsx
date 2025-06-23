import React from 'react';
import { Button, LinkButton } from './ui';

const ButtonDemo: React.FC = () => {
  return (
    <div className="p-8 bg-wise-gray50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-wise-content-primary mb-8">
          Wise Design System Buttons
        </h1>
        
        <div className="bg-wise-bright-green rounded-wise-large p-6 mb-8">
          <p className="text-wise-forest-green text-lg font-medium text-center">
            ✨ Hover over buttons to see the new color transitions: 
            <br />
            <span className="font-mono text-sm">
              Background: #9FE870 → #80e142 | Text: #163300 → #0d1f00
            </span>
          </p>
        </div>
        
        <div className="bg-white rounded-wise-large p-8 shadow-lg mb-8">
          <h2 className="text-xl font-semibold mb-6">Four Button Types</h2>
          
          <div className="space-y-6">
            {/* Primary Buttons */}
            <div>
              <h3 className="text-lg font-medium mb-4">Primary - Apply, Continue, Submit (CTA actions)</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="small">Apply Now</Button>
                <Button variant="primary" size="medium">Continue</Button>
                <Button variant="primary" size="large">Submit Application</Button>
              </div>
              <p className="text-sm text-wise-content-tertiary mt-2">
                Bright green bg (#9FE870) + forest green text (#163300) → Hover: lighter green bg (#80e142) + darker text (#0d1f00)
              </p>
            </div>
            
            {/* Secondary Buttons */}
            <div>
              <h3 className="text-lg font-medium mb-4">Secondary - Learn, Live Chat (Educational/Support actions)</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="secondary" size="small">Learn More</Button>
                <Button variant="secondary" size="medium">Live Chat</Button>
                <Button variant="secondary" size="large">Get Help</Button>
              </div>
              <p className="text-sm text-wise-content-tertiary mt-2">
                White bg + forest green border & text (rgb(22, 51, 0)) → Hover: same as primary
              </p>
            </div>
            
            {/* Third Buttons */}
            <div>
              <h3 className="text-lg font-medium mb-4">Third - Personal (Active navigation)</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="third" size="small">Personal</Button>
                <Button variant="third" size="medium">Dashboard</Button>
                <Button variant="third" size="large">Current Page</Button>
              </div>
              <p className="text-sm text-wise-content-tertiary mt-2">
                Light green bg (rgb(226, 246, 213)) + forest green text → Hover: darker green bg (#d3f2c0)
              </p>
            </div>
            
            {/* Fourth Buttons */}
            <div>
              <h3 className="text-lg font-medium mb-4">Fourth - About, Loans, Back (Secondary navigation/dismissive)</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="fourth" size="small">About</Button>
                <Button variant="fourth" size="medium">Loans</Button>
                <Button variant="fourth" size="large">Back</Button>
              </div>
              <p className="text-sm text-wise-content-tertiary mt-2">
                Transparent bg + secondary text → Hover: light gray bg
              </p>
            </div>
            
            {/* Negative Variants */}
            <div>
              <h3 className="text-lg font-medium mb-4">Negative Variants (Destructive actions)</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" negative size="medium">Delete Account</Button>
                <Button variant="secondary" negative size="medium">Cancel Order</Button>
                <Button variant="third" negative size="medium">Remove Item</Button>
                <Button variant="fourth" negative size="medium">Dismiss</Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-wise-large p-8 shadow-lg mb-8">
          <h2 className="text-xl font-semibold mb-6">Button States</h2>
          
          <div className="space-y-6">
            {/* Loading States */}
            <div>
              <h3 className="text-lg font-medium mb-4">Loading States</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" loading>Loading...</Button>
                <Button variant="secondary" loading>Processing...</Button>
                <Button variant="third" loading>Uploading...</Button>
              </div>
            </div>
            
            {/* Disabled States */}
            <div>
              <h3 className="text-lg font-medium mb-4">Disabled States</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" disabled>Disabled Primary</Button>
                <Button variant="secondary" disabled>Disabled Secondary</Button>
                <Button variant="fourth" disabled>Disabled Fourth</Button>
              </div>
            </div>
            
            {/* Full Width */}
            <div>
              <h3 className="text-lg font-medium mb-4">Full Width</h3>
              <div className="space-y-4">
                <Button variant="primary" size="large" fullWidth>Full Width Primary</Button>
                <Button variant="secondary" size="medium" fullWidth>Full Width Secondary</Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-wise-large p-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-6">Buttons with Icons</h2>
          
          <div className="space-y-6">
            {/* Icons Left */}
            <div>
              <h3 className="text-lg font-medium mb-4">Icons on Left (Support message)</h3>
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="primary" 
                  icon={<span>📞</span>}
                  iconPosition="left"
                >
                  Call Now
                </Button>
                <Button 
                  variant="secondary" 
                  icon={<span>💬</span>}
                  iconPosition="left"
                >
                  Live Chat
                </Button>
                <Button 
                  variant="secondary" 
                  icon={<span>📧</span>}
                  iconPosition="left"
                >
                  Email Us
                </Button>
              </div>
            </div>
            
            {/* Icons Right */}
            <div>
              <h3 className="text-lg font-medium mb-4">Icons on Right (Actions)</h3>
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="primary" 
                  icon={<span>→</span>}
                  iconPosition="right"
                >
                  Continue
                </Button>
                <Button 
                  variant="secondary" 
                  icon={<span>↗</span>}
                  iconPosition="right"
                >
                  Learn More
                </Button>
                <Button 
                  variant="fourth" 
                  icon={<span>↓</span>}
                  iconPosition="right"
                >
                  Download
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonDemo;