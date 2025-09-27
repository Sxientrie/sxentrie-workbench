import React from 'react';

import type { ComponentShowcaseProps } from './ComponentShowcase.props';

export const ComponentShowcase: React.FC<ComponentShowcaseProps> = ({ title, description, children }) => {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">{title}</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">{description}</p>
      </div>
      <div className="p-6 rounded-xl border border-dashed border-border bg-showcase-background">
        {children}
      </div>
    </section>
  );
};