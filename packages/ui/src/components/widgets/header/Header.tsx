import React from 'react';
import { ThemeToggle } from '../theme-toggle';
import { Github } from '../../base/icons';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-foreground">
              Subtle Depth Workbench
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/google/generative-ai-docs/tree/main/frames" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};