import React from 'react';

interface NavigationProps {
  activeTab?: string;
  onNavigate?: (tab: string) => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeTab = 'create',
  onNavigate,
  searchQuery = '',
  onSearchChange,
}) => {
  const handleNav = (tab: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(tab);
    }
  };

  return (
    <header className="w-full bg-surface-container-lowest border-b border-outline-variant z-50 sticky top-0 backdrop-blur-md bg-opacity-95">
      <div className="flex justify-between items-center w-full px-gutter-desktop max-w-[1440px] mx-auto h-16">
        {/* Brand & Left Cluster */}
        <div className="flex items-center gap-space-xl">
          <a
            className="text-headline-md font-headline-md tracking-wider text-primary uppercase font-bold flex items-center gap-space-xs cursor-pointer select-none"
            onClick={handleNav('create')}
          >
            <span className="w-3 h-3 bg-primary-container rounded-sm inline-block shadow-[0_0_8px_#de739c]"></span>
            UXIE
          </a>
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-space-lg">
            <a
              onClick={handleNav('create')}
              className={`cursor-pointer transition-all duration-150 font-label-md text-label-md ${
                activeTab === 'create'
                  ? 'text-primary border-b-2 border-primary pb-1 font-semibold'
                  : 'text-on-surface-variant hover:text-on-surface hover:border-primary hover:text-primary'
              }`}
            >
              Forge
            </a>
            <a
              onClick={handleNav('explore')}
              className={`cursor-pointer transition-all duration-150 font-label-md text-label-md ${
                activeTab === 'explore'
                  ? 'text-primary border-b-2 border-primary pb-1 font-semibold'
                  : 'text-on-surface-variant hover:text-on-surface hover:border-primary hover:text-primary'
              }`}
            >
              Vault
            </a>
            <a
              onClick={handleNav('explore')}
              className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md hover:border-primary hover:text-primary transition-all duration-150 cursor-pointer"
            >
              Leaderboard
            </a>
            <a
              onClick={handleNav('explore')}
              className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md hover:border-primary hover:text-primary transition-all duration-150 cursor-pointer"
            >
              Showcase
            </a>
          </nav>
        </div>

        {/* Trailing Cluster */}
        <div className="flex items-center gap-space-md">
          {/* Search bar on right */}
          <div className="relative hidden sm:block">
            <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-outline text-[16px]">
              search
            </span>
            <input
              className="bg-surface-container-lowest border border-outline-variant rounded-lg pl-8 pr-3 py-1 text-label-md font-label-md text-on-surface placeholder:text-outline focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all w-48 lg:w-64"
              placeholder="Search developer or ID..."
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
            />
          </div>

          {/* Trailing Icon Actions */}
          <button
            className="text-on-surface-variant hover:text-primary p-1.5 transition-colors duration-150 relative"
            title="Notifications"
            type="button"
          >
            <span class="material-symbols-outlined text-[20px]">notifications</span>
            <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-primary rounded-full"></span>
          </button>
          <button
            className="text-on-surface-variant hover:text-primary p-1.5 transition-colors duration-150"
            title="Terminal Interface"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">terminal</span>
          </button>

          {/* Trailing Primary Action */}
          <button
            onClick={handleNav('create')}
            className="bg-primary-container text-on-primary-container font-label-md text-label-md px-space-md py-2 rounded-lg font-semibold hover:shadow-[0_0_12px_rgba(222,115,156,0.5)] active:scale-[0.98] transition-all duration-100 ease-out flex items-center gap-space-xs border border-primary-container"
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">key</span>
            <span>Connect Identity</span>
          </button>

          {/* Holographic profile avatar */}
          <div
            className="w-8 h-8 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center relative overflow-hidden hidden sm:flex cursor-pointer"
            title="Holographic developer profile avatar"
            onClick={handleNav('explore')}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary-container via-transparent to-primary-container opacity-40"></div>
            <span className="material-symbols-outlined text-primary text-[18px]">badge</span>
          </div>
        </div>
      </div>
    </header>
  );
};
