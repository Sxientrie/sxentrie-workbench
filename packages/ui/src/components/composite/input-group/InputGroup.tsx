import React from 'react';
import { Input, InputProps } from '../../base/input';
import { Label } from '../../base/label';
import { cn } from '../../../lib/utils';

interface InputGroupProps extends InputProps {
  label: string;
  id: string;
}

export const InputGroup: React.FC<InputGroupProps> = ({ label, id, className, ...props }) => {
  return (
    <div className={cn('grid w-full items-center gap-2', className)}>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} {...props} />
    </div>
  );
};