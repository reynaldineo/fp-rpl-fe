import React, { useState } from 'react';
import { RegisterOptions } from 'react-hook-form';

import ErrorMessage from '@/components/form/ErrorMessage';
import RadioButton from '@/components/form/RadioButton';
import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';

type PriorityScale = {
  name: string;
  withTitle?: boolean;
  scaleNumber?: number;
  defaultValue?: number;
  className?: string;
  priorityScaleClassName?: string;
  prefix?: string;
  prefixClassName?: string;
  suffix?: string;
  suffixClassName?: string;
  containerClassName?: string;
  validation?: RegisterOptions;
  readOnly?: boolean;
  overflow?: boolean;
};

export default function PriorityScale({
  name,
  withTitle = false,
  scaleNumber = 10,
  defaultValue,
  className,
  priorityScaleClassName,
  prefix,
  prefixClassName,
  suffix,
  suffixClassName,
  containerClassName,
  validation,
  readOnly = false,
  overflow = true,
}: PriorityScale) {
  const [error, setError] = useState<string>('');
  return (
    <section className={containerClassName}>
      <div className={clsxm('max-w-fit', className)}>
        <div className='flex gap-2'>
          {prefix && (
            <Typography
              variant='c'
              weight='medium'
              className={clsxm(
                'mb-1 flex items-end md:mb-1.5',
                !withTitle && 'mb-0 items-center',
                'text-center text-xs/6 text-typo-main',
                prefixClassName,
              )}
            >
              {prefix}
            </Typography>
          )}
          <div className={clsxm('max-w-fit', overflow && 'overflow-x-auto')}>
            <div
              className={clsxm('flex gap-1 md:gap-4', priorityScaleClassName)}
            >
              {[...Array(scaleNumber)].map((_, index) => (
                <div className='flex flex-col justify-center' key={index}>
                  {withTitle && (
                    <Typography
                      variant='btn'
                      className='text-center text-sm text-typo-secondary'
                    >
                      {index + 1}
                    </Typography>
                  )}

                  <RadioButton
                    label={''}
                    name={name}
                    value={Number(index + 1)}
                    className='gap-0'
                    buttonClassName='mt-1.5 md:mt-2'
                    hideError={true}
                    defaultValue={defaultValue}
                    readOnly={readOnly}
                    setError={setError}
                    validation={validation}
                  />
                </div>
              ))}
            </div>
          </div>
          {suffix && (
            <Typography
              variant='c'
              weight='medium'
              className={clsxm(
                'mb-1 flex items-end md:mb-1.5',
                !withTitle && 'mb-0 items-center',
                'text-center text-xs/6 text-typo-main',
                suffixClassName,
              )}
            >
              {suffix}
            </Typography>
          )}
        </div>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </div>
    </section>
  );
}
