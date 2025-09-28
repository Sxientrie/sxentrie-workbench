import React, { Children, cloneElement, forwardRef } from 'react';
import { cn } from "../../../lib/utils";

interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

const Slot = forwardRef<HTMLElement, SlotProps>(({ children, ...props }, ref) => {
  // FIX: `Children.only` already ensures there is a single React Element child.
  // Casting to `React.ReactElement<any>` helps TypeScript correctly infer the
  // type of `child.props` as `any`, resolving errors with accessing `className`,
  // `style`, and passing `ref` to `cloneElement`.
  const child = Children.only(children) as React.ReactElement<any>;

  return cloneElement(child, {
    ...props,
    ref,
    className: cn(child.props.className, props.className),
    style: { ...child.props.style, ...props.style },
  });
});

Slot.displayName = 'Slot';

export { Slot };
