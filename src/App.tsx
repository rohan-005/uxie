import React, { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { LandingHero } from './components/LandingHero';
import { PlatformSelector, PlatformType } from './components/PlatformSelector';
import { UsernameInput } from './components/UsernameInput';
import { GenerationLoader } from './components/GenerationLoader';
import { PowerReveal } from './components/PowerReveal';
import { ExploreShowcase } from './components/ExploreShowcase';

import { CardTemplateId } from './types/card';
import { PlatformProfile } from './types/profile';
import { fetchPlatformProfile } from './platforms/PlatformAdapter';
import { loadSavedUserState, saveUserState } from './utils/storage';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('landing');
  const [step, setStep] = useState<'platform' | 'username' | 'loading' | 'reveal'>('platform');

  const [selectedPlatform, setSelectedPlatform] = useState<PlatformType>('github');
  const [username, setUsername] = useState<string>('torvalds');
  // Default to template2 (F1 Card with f1card.png background)
  const [selectedTemplate, setSelectedTemplate] = useState<CardTemplateId>('template2');

  const [generatedProfile, setGeneratedProfile] = useState<PlatformProfile | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Initialize saved state from localStorage
  useEffect(() => {
    const saved = loadSavedUserState();
    if (saved) {
      if (saved.selectedPlatform) setSelectedPlatform(saved.selectedPlatform);
      if (saved.username) setUsername(saved.username);
      if (saved.selectedTemplate) setSelectedTemplate(saved.selectedTemplate);
      if (saved.lastGeneratedProfile) setGeneratedProfile(saved.lastGeneratedProfile);
    }

    // Parse URL query params if present
    const params = new URLSearchParams(window.location.search);
    const urlPlatform = params.get('platform') as PlatformType;
    const urlUsername = params.get('username');
    const urlTemplate = params.get('template') as CardTemplateId;

    if (urlPlatform) setSelectedPlatform(urlPlatform);
    if (urlUsername) setUsername(urlUsername);
    if (urlTemplate) setSelectedTemplate(urlTemplate);

    if (urlPlatform && urlUsername) {
      handleFetchAndGenerate(urlPlatform, urlUsername);
    }
  }, []);

  const handleFetchAndGenerate = async (p: PlatformType, u: string) => {
    setErrorMessage(null);
    setStep('loading');
    setCurrentTab('create');

    try {
      const profile = await fetchPlatformProfile(p, u);
      setGeneratedProfile(profile);
      saveUserState({
        selectedPlatform: p,
        username: u,
        selectedTemplate,
        lastGeneratedProfile: profile,
      });
    } catch (err: any) {
      console.warn('Failed to fetch live profile, attempting fallback:', err);
      setErrorMessage(err?.message || 'Profile telemetry lookup failed. Using fallback data.');
      try {
        const fallbackProfile = await fetchPlatformProfile(p, u, true);
        setGeneratedProfile(fallbackProfile);
      } catch (fallbackErr) {
        setErrorMessage('Unable to load profile data. Please try another handle.');
        setStep('username');
      }
    }
  };

  const handleLoaderComplete = () => {
    setStep('reveal');
  };

  const handleSelectDeveloper = (p: PlatformType, u: string) => {
    setSelectedPlatform(p);
    setUsername(u);
    handleFetchAndGenerate(p, u);
  };

  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col justify-between selection:bg-primary-container selection:text-on-primary-container relative w-full overflow-x-hidden">
      <Navigation
        activeTab={currentTab}
        onNavigate={(tab) => {
          setCurrentTab(tab);
          if (tab === 'create' && step === 'reveal' && !generatedProfile) {
            setStep('platform');
          }
        }}
      />

      {/* Global Error Toast */}
      {errorMessage && (
        <div className="sticky top-16 z-40 bg-error-container/90 border-b border-error text-on-error-container px-6 py-2.5 font-code text-label-code-sm flex items-center justify-between backdrop-blur-md w-full">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">warning</span>
            <span>{errorMessage}</span>
          </div>
          <button
            onClick={() => setErrorMessage(null)}
            className="font-bold hover:underline ml-4"
          >
            Dismiss
          </button>
        </div>
      )}

      <main className="flex-grow flex flex-col w-full">
        {/* Landing Tab */}
        {currentTab === 'landing' && (
          <LandingHero
            onStartClick={() => {
              setCurrentTab('create');
              setStep('platform');
            }}
            onExploreClick={() => setCurrentTab('explore')}
          />
        )}

        {/* Create Card Flow */}
        {currentTab === 'create' && (
          <div className="flex-1 flex flex-col w-full">
            {step === 'platform' && (
              <PlatformSelector
                selectedPlatform={selectedPlatform}
                onSelectPlatform={(p) => {
                  setSelectedPlatform(p);
                  saveUserState({ selectedPlatform: p });
                }}
                onContinue={() => setStep('username')}
              />
            )}

            {step === 'username' && (
              <UsernameInput
                platform={selectedPlatform}
                username={username}
                onUsernameChange={(u) => {
                  setUsername(u);
                  saveUserState({ username: u });
                }}
                onBackToPlatform={() => setStep('platform')}
                onSubmit={() => handleFetchAndGenerate(selectedPlatform, username)}
              />
            )}

            {step === 'loading' && (
              <GenerationLoader
                platform={selectedPlatform}
                username={username}
                onComplete={handleLoaderComplete}
              />
            )}

            {step === 'reveal' && generatedProfile && (
              <PowerReveal
                profile={generatedProfile}
                selectedTemplate={selectedTemplate}
                onSelectTemplate={(tmpl) => {
                  setSelectedTemplate(tmpl);
                  saveUserState({ selectedTemplate: tmpl });
                }}
                onReset={() => {
                  setStep('platform');
                }}
              />
            )}
          </div>
        )}

        {/* Explore Showcase Gallery */}
        {currentTab === 'explore' && (
          <ExploreShowcase onSelectDeveloper={handleSelectDeveloper} />
        )}
      </main>

      <Footer />
    </div>
  );
}
