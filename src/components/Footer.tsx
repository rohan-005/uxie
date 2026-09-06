import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant w-full relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-gutter-desktop py-8 max-w-[1440px] mx-auto gap-4">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-space-sm text-center sm:text-left">
          <span className="text-label-lg font-label-lg tracking-widest text-primary uppercase font-bold">UXIE</span>
          <span className="hidden sm:inline text-outline">|</span>
          <p className="text-body-sm font-body-sm text-on-surface-variant">
            © 2025 UXIE TELEMETRY CORP. ALL RIGHTS RESERVED. KNOW YOUR POWER. SHOW YOUR PROGRESS.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center items-center gap-space-md text-label-sm font-label-sm">
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-150" href="#">
            Documentation
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-150" href="#">
            Cryptographic Verification
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-150" href="#">
            Platform Connectors
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-150" href="#">
            API Status
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-150" href="#">
            Privacy Protocol
          </a>
        </div>
      </div>
    </footer>
  );
};
