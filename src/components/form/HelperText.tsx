import { ReactNode } from 'react';

import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';

export default function HelperText({
  children,
  helperTextClassName,
}: {
  children: ReactNode;
  helperTextClassName?: string;
}) {
  return (
    <div className='flex space-x-1'>
      <Typography
        as='p'
        weight='regular'
        variant='c'
        className={clsxm(
          'text-xs !leading-tight text-typo',
          helperTextClassName,
        )}
      >
        {children}
      </Typography>
    </div>
  );
}
