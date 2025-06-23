import React, { useState } from 'react';
import { Chip, ChipGroup } from './ui';

const ChipDemo: React.FC = () => {
  const [selectedChoice, setSelectedChoice] = useState('personal');
  const [selectedFilters, setSelectedFilters] = useState<string[]>(['featured']);
  const [dynamicFilters, setDynamicFilters] = useState<string[]>(['featured', 'low-rate']);

  const choiceOptions = [
    { id: 'personal', label: 'Personal', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> },
    { id: 'business', label: 'Business', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> },
    { id: 'mortgage', label: 'Mortgage', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> },
    { id: 'auto', label: 'Auto', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg> }
  ];

  const filterOptions = [
    { id: 'featured', label: 'Featured' },
    { id: 'low-rate', label: 'Low Rate' },
    { id: 'fast-approval', label: 'Fast Approval' },
    { id: 'no-fee', label: 'No Fee' },
    { id: 'secured', label: 'Secured' },
    { id: 'unsecured', label: 'Unsecured' }
  ];

  const handleFilterToggle = (filterId: string) => {
    setSelectedFilters(prev => 
      prev.includes(filterId)
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };

  const handleDynamicFilterRemove = (filterId: string) => {
    setDynamicFilters(prev => prev.filter(id => id !== filterId));
  };

  const addDynamicFilter = (filterId: string) => {
    if (!dynamicFilters.includes(filterId)) {
      setDynamicFilters(prev => [filterId, ...prev]); // Add to front as per Wise specs
    }
  };

  return (
    <div className="p-8 bg-wise-gray50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-wise-content-primary mb-8">
          Wise Design System Chips
        </h1>
        
        <div className="space-y-12">
          {/* Choice Chips */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Choice Chips</h2>
            <p className="text-wise-content-secondary mb-6">
              Allow selecting one chip from a set. One chip is pre-selected by default.
            </p>
            
            <div className="bg-white rounded-wise-large p-6 shadow-card">
              <h3 className="text-lg font-medium mb-4">Loan Type Selection</h3>
              <ChipGroup scrollable={false}>
                {choiceOptions.map((option) => (
                  <Chip
                    key={option.id}
                    variant="choice"
                    size="medium"
                    selected={selectedChoice === option.id}
                    onClick={() => setSelectedChoice(option.id)}
                    icon={option.icon}
                  >
                    {option.label}
                  </Chip>
                ))}
              </ChipGroup>
              
              <div className="mt-4 p-3 bg-wise-gray50 rounded-lg">
                <p className="text-sm text-wise-content-secondary">
                  Selected: <span className="font-medium text-wise-content-primary">{selectedChoice}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Filter Chips */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Filter Chips</h2>
            <p className="text-wise-content-secondary mb-6">
              Allow selecting multiple chips. Unselected by default.
            </p>
            
            <div className="bg-white rounded-wise-large p-6 shadow-card">
              <h3 className="text-lg font-medium mb-4">Loan Filters</h3>
              <ChipGroup scrollable={true}>
                {filterOptions.map((option) => (
                  <Chip
                    key={option.id}
                    variant="filter"
                    size="medium"
                    selected={selectedFilters.includes(option.id)}
                    onClick={() => handleFilterToggle(option.id)}
                  >
                    {option.label}
                  </Chip>
                ))}
              </ChipGroup>
              
              <div className="mt-4 p-3 bg-wise-gray50 rounded-lg">
                <p className="text-sm text-wise-content-secondary">
                  Active filters: <span className="font-medium text-wise-content-primary">
                    {selectedFilters.length > 0 ? selectedFilters.join(', ') : 'None'}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Dismissible Filter Chips */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Dismissible Filter Chips</h2>
            <p className="text-wise-content-secondary mb-6">
              Filter chips with remove functionality. New chips appear at the front of the list.
            </p>
            
            <div className="bg-white rounded-wise-large p-6 shadow-card">
              <h3 className="text-lg font-medium mb-4">Applied Filters</h3>
              
              {dynamicFilters.length > 0 && (
                <div className="mb-4">
                  <ChipGroup scrollable={true}>
                    {dynamicFilters.map((filterId) => {
                      const option = filterOptions.find(opt => opt.id === filterId);
                      return option ? (
                        <Chip
                          key={option.id}
                          variant="filter"
                          size="medium"
                          selected={true}
                          onRemove={() => handleDynamicFilterRemove(option.id)}
                        >
                          {option.label}
                        </Chip>
                      ) : null;
                    })}
                  </ChipGroup>
                </div>
              )}
              
              <div className="border-t border-wise-gray200 pt-4">
                <h4 className="text-sm font-medium text-wise-content-secondary mb-3">Add filters:</h4>
                <ChipGroup scrollable={true}>
                  {filterOptions
                    .filter(option => !dynamicFilters.includes(option.id))
                    .map((option) => (
                      <Chip
                        key={option.id}
                        variant="filter"
                        size="small"
                        selected={false}
                        onClick={() => addDynamicFilter(option.id)}
                      >
                        {option.label}
                      </Chip>
                    ))}
                </ChipGroup>
              </div>
            </div>
          </div>

          {/* Size Variations */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Size Variations</h2>
            <p className="text-wise-content-secondary mb-6">
              Chips come in three sizes: small, medium, and large.
            </p>
            
            <div className="bg-white rounded-wise-large p-6 shadow-card space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Small Chips</h3>
                <ChipGroup scrollable={false}>
                  <Chip variant="choice" size="small" selected={true}>Featured</Chip>
                  <Chip variant="choice" size="small" selected={false}>Popular</Chip>
                  <Chip variant="filter" size="small" selected={true} onRemove={() => {}}>Low Rate</Chip>
                </ChipGroup>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Medium Chips (Default)</h3>
                <ChipGroup scrollable={false}>
                  <Chip variant="choice" size="medium" selected={true} icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}>Featured</Chip>
                  <Chip variant="choice" size="medium" selected={false} icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}>Popular</Chip>
                  <Chip variant="filter" size="medium" selected={true} onRemove={() => {}}>Low Rate</Chip>
                </ChipGroup>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Large Chips</h3>
                <ChipGroup scrollable={false}>
                  <Chip variant="choice" size="large" selected={true} icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}>Personal Loans</Chip>
                  <Chip variant="choice" size="large" selected={false} icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}>Business Loans</Chip>
                  <Chip variant="filter" size="large" selected={true} onRemove={() => {}}>Fast Approval</Chip>
                </ChipGroup>
              </div>
            </div>
          </div>

          {/* States */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Chip States</h2>
            <p className="text-wise-content-secondary mb-6">
              Different states including disabled, hover, and focus states.
            </p>
            
            <div className="bg-white rounded-wise-large p-6 shadow-card">
              <ChipGroup scrollable={false}>
                <Chip variant="choice" size="medium" selected={false}>Default</Chip>
                <Chip variant="choice" size="medium" selected={true}>Selected</Chip>
                <Chip variant="choice" size="medium" selected={false} disabled={true}>Disabled</Chip>
                <Chip variant="filter" size="medium" selected={false}>Filter Default</Chip>
                <Chip variant="filter" size="medium" selected={true}>Filter Selected</Chip>
                <Chip variant="filter" size="medium" selected={false} disabled={true}>Filter Disabled</Chip>
              </ChipGroup>
              
              <div className="mt-4 p-3 bg-wise-gray50 rounded-lg">
                <p className="text-sm text-wise-content-secondary">
                  Hover over chips to see interactive states. Disabled chips don't respond to interaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChipDemo;