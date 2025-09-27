import React, { forwardRef } from 'react';
import { cn } from '../../../lib/utils';
import type { InputProps } from './Input.props';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-lg border-none bg-input px-3 py-2 text-sm text-foreground',
          'placeholder:text-muted-foreground',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring focus-visible:ring-offset-background',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'shadow-[inset_0_1px_3px_rgba(0,0,0,0.15)] dark:shadow-[inset_0_1px_3px_rgba(0,0,0,0.6)]',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';
