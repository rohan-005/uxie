import React from 'react';

interface NavigationProps {
  activeTab?: string;
  onNavigate?: (tab: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeTab = 'create',
  onNavigate,
}) => {
  const handleNav = (tab: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(tab);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-surface-container-lowest/80 backdrop-blur-md border-b border-outline-variant/30 shadow-2xl shadow-surface-container-lowest/50 w-full">
      <div className="flex justify-between items-center w-full px-6 lg:px-12 h-16">
        {/* Brand & Tagline Micro-Badge */}
        <div className="flex items-center gap-3">
          <a
            className="font-headline text-headline-lg font-bold tracking-tight text-on-surface hover:text-primary transition-colors cursor-pointer"
            onClick={handleNav('create')}
          >
            UXIE
          </a>
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-surface-container border border-outline-variant/40">
            <span className="w-1.5 h-1.5 rounded-sm bg-primary-container inline-block animate-pulse"></span>
            <span className="font-code text-label-code-sm uppercase tracking-wider text-tertiary">
              POWER DECK
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            onClick={handleNav('create')}
            className={`cursor-pointer transition-colors font-medium ${
              activeTab === 'create'
                ? 'text-primary border-b-2 border-primary pb-1 font-semibold'
                : 'text-on-surface-variant hover:text-on-surface hover:text-primary'
            }`}
          >
            Create
          </a>
          <a
            onClick={handleNav('explore')}
            className={`cursor-pointer transition-colors font-medium ${
              activeTab === 'explore'
                ? 'text-primary border-b-2 border-primary pb-1 font-semibold'
                : 'text-on-surface-variant hover:text-on-surface hover:text-primary'
            }`}
          >
            Explore
          </a>
        </nav>

        {/* Trailing Action Cluster */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleNav('explore')}
            className="hidden sm:inline-flex items-center justify-center px-3.5 py-1.5 rounded-lg border border-outline-variant/60 font-code text-label-code-sm uppercase tracking-wider text-tertiary hover:border-primary-container hover:text-on-surface transition-all active:scale-95 duration-150"
            type="button"
          >
            View Gallery
          </button>
          <button
            onClick={handleNav('create')}
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-lg bg-gradient-to-r from-secondary-container to-primary-container text-on-primary font-code text-label-code-sm uppercase tracking-wider font-semibold shadow-lg shadow-primary-container/20 hover:brightness-110 active:scale-95 transition-all duration-150"
            type="button"
          >
            Connect
          </button>
        </div>
      </div>
    </header>
  );
};
