import React from 'react';
import { IoMdClose } from 'react-icons/io';

import clsxm from '@/lib/clsxm';

import Typography from '../Typography';

enum ChipsSize {
  'sm',
  'md',
}

enum ChipsColor {
  'primary',
  'danger',
  'warning',
  'success',
  'default',
}

type ChipsType = {
  children: React.ReactNode;
  iconClose?: React.ReactNode;
  size?: keyof typeof ChipsSize;
  color?: keyof typeof ChipsColor;
  className?: string;
};

export default function Chips({
  children,
  color,
  iconClose,
  className,
  size = 'sm',
  ...props
}: ChipsType) {
  return (
    <div className={clsxm('flex gap-4', className)}>
      <div
        className={clsxm(
          // *=============== Default ==================
          'h-fit w-fit bg-[#E3E4E5]',
          // *=============== Color Type ==================
          [
            color === 'primary' && 'bg-primary-info-main',
            color === 'warning' && 'bg-warning-main',
            color === 'danger' && 'bg-danger-main',
            color === 'success' && 'bg-success-main',
          ],
          // *=============== Size Type ==================
          [
            size === 'sm' && 'rounded-2xl px-3.5 py-1 ',
            size === 'md' && 'rounded-3xl px-4 py-2 ',
          ],
        )}
        {...props}
      >
        <Typography
          as='p'
          weight='regular'
          variant='c'
          className={clsxm('text-typo-main flex', [
            size === 'sm' && 'text-xs leading-6',
            size === 'md' && 'text-base',
          ])}
        >
          {children}
          {iconClose && (
            <span className='m-auto ml-1.5'>
              <IoMdClose size={14} />
            </span>
          )}
        </Typography>
      </div>
    </div>
  );
}
