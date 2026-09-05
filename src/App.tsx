import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { LandingHero } from './components/LandingHero';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('landing');

  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col justify-between selection:bg-primary-container selection:text-on-primary-container">
      <Navigation
        activeTab={currentTab}
        onNavigate={(tab) => setCurrentTab(tab)}
      />

      <main className="flex-grow">
        {currentTab === 'landing' && (
          <LandingHero
            onStartClick={() => setCurrentTab('create')}
            onExploreClick={() => setCurrentTab('explore')}
          />
        )}
        {currentTab === 'create' && (
          <div className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="font-headline text-headline-lg font-bold text-tertiary-fixed mb-4">
              Select Your Platform &amp; Build Card
            </h2>
            <p className="text-on-surface-variant font-body">
              Platform selection flow coming up...
            </p>
          </div>
        )}
        {currentTab === 'explore' && (
          <div className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="font-headline text-headline-lg font-bold text-tertiary-fixed mb-4">
              Explore Power Cards Showcase
            </h2>
            <p className="text-on-surface-variant font-body">
              Showcase gallery coming up...
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
