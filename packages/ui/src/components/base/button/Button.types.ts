import type * as React from 'react';

// A static object that mimics the output of class-variance-authority (cva)
// to define button styles in a structured and maintainable way.
export const buttonVariants = {
  base: [
    'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-[box-shadow,filter,background-color] duration-150 ease-in-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  variant: {
    primary: [
      'bg-primary text-primary-foreground border border-black/10 dark:border-white/10',
      // Subtle hover brightness increase to invite interaction without "lifting"
      'hover:brightness-105',
      // Press effect: darken and invert shadows for a "debossed" feel
      'active:brightness-95',
      
      // Default "Embossed" State (Grounded)
      // Uses inset shadows only: top highlight, bottom shadow.
      'shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),inset_0_-1px_1px_rgba(0,0,0,0.15)]',
      'dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_-1px_1px_rgba(0,0,0,0.5)]',

      // Active "Debossed" State (Pressed In)
      // Inverts the shadows: top shadow, bottom highlight.
      'active:shadow-[inset_0_1px_2px_rgba(0,0,0,0.15),inset_0_0_1px_rgba(255,255,255,0.1)]',
      'dark:active:shadow-[inset_0_1px_2px_rgba(0,0,0,0.5),inset_0_0_1px_rgba(255,255,255,0.2)]',
    ],
    secondary: [
      'bg-secondary text-secondary-foreground border border-black/10 dark:border-white/10',
      // Subtle hover brightness increase to invite interaction without "lifting"
      'hover:brightness-105',
      // Press effect: darken and invert shadows for a "debossed" feel
      'active:brightness-95',

      // Default "Embossed" State (Grounded)
      'shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),inset_0_-1px_1px_rgba(0,0,0,0.15)]',
      'dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_-1px_1px_rgba(0,0,0,0.5)]',

      // Active "Debossed" State (Pressed In)
      'active:shadow-[inset_0_1px_2px_rgba(0,0,0,0.15),inset_0_0_1px_rgba(255,255,255,0.1)]',
      'dark:active:shadow-[inset_0_1px_2px_rgba(0,0,0,0.5),inset_0_0_1px_rgba(255,255,255,0.2)]',
    ],
    ghost:
      'shadow-none border-none hover:bg-accent hover:text-accent-foreground active:bg-accent/90',
  },
  size: {
    default: 'h-10 px-4 py-2',
    icon: 'h-10 w-10',
  },
};

export type ButtonVariant = keyof typeof buttonVariants.variant;
export type ButtonSize = keyof typeof buttonVariants.size;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  loading?: boolean;
  loadingIcon?: React.ReactNode;
}