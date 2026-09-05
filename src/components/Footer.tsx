import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/30 z-10">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 lg:px-12 py-8 max-w-7xl mx-auto gap-4">
        {/* Logo and Copyright Anchor */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <span className="font-headline text-headline-md font-bold text-on-surface">
            UXIE
          </span>
          <span className="hidden sm:inline text-outline-variant/60">•</span>
          <span className="text-body-md font-body text-on-surface-variant text-center sm:text-left">
            © 2026 UXIE. Know your power. Show your progress.
          </span>
        </div>

        {/* Footer Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6">
          <a
            href="#create"
            className="text-on-surface-variant hover:text-on-surface text-label-code-sm font-code uppercase transition-colors hover:text-primary"
          >
            Create Card
          </a>
          <a
            href="#platforms"
            className="text-on-surface-variant hover:text-on-surface text-label-code-sm font-code uppercase transition-colors hover:text-primary"
          >
            Supported Platforms
          </a>
          <a
            href="#explore"
            className="text-on-surface-variant hover:text-on-surface text-label-code-sm font-code uppercase transition-colors hover:text-primary"
          >
            Gallery
          </a>
        </nav>
      </div>
    </footer>
  );
};
