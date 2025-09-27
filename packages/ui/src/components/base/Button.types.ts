import type * as React from 'react';

// A static object that mimics the output of class-variance-authority (cva)
// to define button styles in a structured and maintainable way.
export const buttonVariants = {
  base: [
    'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-shadow duration-150 ease-in-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    // REMOVED: 'active:scale-[0.97] active:translate-y-px' to prevent jitter
  ],
  variant: {
    primary: [
      'bg-primary text-primary-foreground border border-black/10 dark:border-white/10',
      // Embossed effect
      'shadow-[0_1px_1px_#ffffff4d_inset,0_-1px_1px_#00000033_inset,0_2px_3px_#0000004d]',
      // Debossed (pressed) effect on click
      'active:shadow-[0_1px_1px_#ffffff4d_inset,0_-1px_1px_#00000033_inset,0_1px_1px_#0000004d]',
    ],
    secondary: [
      'bg-secondary text-secondary-foreground border border-black/10 dark:border-white/10',
       // Embossed effect
      'shadow-[0_1px_1px_#ffffff4d_inset,0_-1px_1px_#00000033_inset,0_2px_3px_#0000004d]',
      // Debossed (pressed) effect on click
      'active:shadow-[0_1px_1px_#ffffff4d_inset,0_-1px_1px_#00000033_inset,0_1px_1px_#0000004d]',
    ],
    ghost: 'shadow-none border-none hover:bg-accent hover:text-accent-foreground',
  },
  size: {
    default: 'h-10 px-4 py-2',
    icon: 'h-10 w-10',
  },
};

export type ButtonVariant = keyof typeof buttonVariants.variant;
export type ButtonSize = keyof typeof buttonVariants.size;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  loading?: boolean;
  loadingIcon?: React.ReactNode;
}
