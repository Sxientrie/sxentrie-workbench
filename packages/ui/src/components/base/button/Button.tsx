import * as React from 'react';
import { Slot } from '../slot';
import { cn } from '../../../lib/utils';
import { type ButtonProps, buttonVariants } from './Button.types';
import { Loader } from '../icons';

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
