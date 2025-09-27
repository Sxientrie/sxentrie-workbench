'use client';

import * as React from 'react';
import { Slot } from './slot';
import { cn } from '../../lib/utils';
import { type ButtonProps, buttonVariants } from './Button.types';
import { Loader } from './icons';

/**
 * A foundational, interactive button component that embodies the "Subtle Depth" UI philosophy.
 * It is embossed to appear raised, inviting user action, and uses a deboss effect on click
 * to provide tactile feedback. It fully supports polymorphism via the `asChild` prop and
 * includes a loading state.
 *
 * @example
 * // Default button
 * <Button>Click Me</Button>
 *
 * @example
 * // Destructive variant button
 * <Button variant="destructive">Delete</Button>
 *
 * @example
 * // Loading state button
 * <Button loading>Loading...</Button>
 *
 * @example
 * // Polymorphic button rendering a link
 * <Button asChild>
 * <a href="/login">Login</a>
 * </Button>
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'default',
      asChild = false,
      loading = false,
      loadingIcon,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(
          buttonVariants.base,
          buttonVariants.variant[variant],
          buttonVariants.size[size],
          className
        )}
        disabled={loading || props.disabled}
        ref={ref}
        {...props}
      >
        {loading ? (
          <div className="flex items-center justify-center" aria-label="Loading">
            {loadingIcon || <Loader className="h-4 w-4" />}
          </div>
        ) : (
          children
        )}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button };