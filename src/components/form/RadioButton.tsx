import clsx from 'clsx';
import get from 'lodash.get';
import * as React from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

import HelperText from '@/components/form/HelperText';
import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';

export type RadioProps = {
  /** Input label */
  label: string;
  name: string;
  value: string | number;
  defaultValue?: string | number;
  /** Small text below input, useful for additional information */
  helperText?: string;
  /** Disables the input and shows defaultValue (can be set from React Hook Form) */
  readOnly?: boolean;
  /** Disable error style (not disabling error validation) */
  hideError?: boolean;
  /** Manual validation using RHF, it is encouraged to use yup resolver instead */
  validation?: RegisterOptions;
  /** Set error message from parent component */
  setError?: React.Dispatch<React.SetStateAction<string>>;
  /* input button classname */
  buttonClassName?: string;
  className?: string;
} & React.ComponentPropsWithoutRef<'input'>;

export default function RadioButton({
  label,
  placeholder = '',
  helperText,
  name,
  value,
  readOnly = false,
  hideError = false,
  defaultValue,
  validation,
  setError,
  className,
  buttonClassName,
  ...rest
}: RadioProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = get(errors, name);

  React.useEffect(() => {
    setError && setError(error?.message?.toString() || '');
  }, [error, setError]);

  return (
    <div>
      <div className={clsxm('flex items-center gap-2', className)}>
        <input
          {...register(name, validation)}
          {...rest}
          type='radio'
          name={name}
          id={`${name}_${value}`}
          value={value}
          defaultChecked={defaultValue === value}
          disabled={readOnly}
          className={clsxm(
            'my-2  size-[18px] md:size-[24px]',
            'shrink-0 cursor-pointer',
            'focus:outline-none focus:ring-0 focus:ring-offset-0',
            'checked:bg-primary-info-hover checked:active:bg-primary-info-active checked:hover:bg-primary-600 checked:focus:bg-primary-500',
            readOnly &&
              'cursor-not-allowed bg-gray-100 disabled:checked:bg-primary-400',
            error && 'border-danger-main bg-danger-main',
            buttonClassName,
          )}
          placeholder={placeholder}
          aria-describedby={name}
        />
        <Typography
          className={clsx(readOnly && 'cursor-not-allowed', 'text-sm')}
          as='label'
          htmlFor={`${name}_${value}`}
          variant='btn'
        >
          {label}
        </Typography>
      </div>
      {helperText && <HelperText>{helperText}</HelperText>}
      {!hideError && error && (
        <div className='flex space-x-1'>
          <Typography
            as='p'
            weight='regular'
            variant='c'
            className='text-danger-main text-xs !leading-tight'
          >
            {error?.message?.toString()}
          </Typography>
        </div>
      )}
    </div>
  );
}
