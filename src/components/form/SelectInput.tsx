import * as React from 'react';
import { get, RegisterOptions, useFormContext } from 'react-hook-form';
import { FiChevronDown } from 'react-icons/fi';

import clsxm from '@/lib/clsxm';

import ErrorMessage from './ErrorMessage';
import HelperText from './HelperText';
import LabelText from './LabelText';

export type SelectInputProps = {
  id: string;
  label?: string;
  helperText?: string;
  hideError?: boolean;
  validation?: RegisterOptions;
  readOnly?: boolean;
  placeholder?: string;
} & React.ComponentPropsWithoutRef<'select'>;

export default function SelectInput({
  id,
  label,
  helperText,
  hideError = false,
  validation,
  className,
  readOnly = false,
  defaultValue = '',
  placeholder = '',
  children,
  ...rest
}: SelectInputProps) {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const error = get(errors, id);
  const value = watch(id);

  return (
    <div className='w-full space-y-1.5 rounded-md'>
      {label && (
        <LabelText required={validation?.required ? true : false}>
          {label}
        </LabelText>
      )}

      <div className='relative'>
        <select
          {...register(id, validation)}
          id={id}
          name={id}
          defaultValue={defaultValue}
          disabled={readOnly}
          className={clsxm(
            'w-full appearance-none truncate rounded-md border-none py-2.5 pl-3 pr-8',
            'focus:outline-1 focus:outline-primary-500 focus:ring-inset',
            'ring-1 ring-[#808080] focus:outline-primary-500',
            'font-poppins text-sm text-typo-secondary',
            'hover:ring-2 hover:ring-[#000]',
            readOnly && 'cursor-not-allowed',
            error
              ? 'ring-danger-main ring-1 ring-inset focus:ring-red-500'
              : 'focus:ring-typo-outline-1',
            value && 'ring-primary-info-active focus:ring-primary-info-active',
            className,
          )}
          aria-describedby={id}
          {...rest}
        >
          {placeholder && (
            <option value='' disabled hidden>
              {placeholder}
            </option>
          )}
          {children}
        </select>
        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
          <FiChevronDown className='text-typo-outline-1 text-xl' />
        </div>
      </div>

      {!hideError && error && <ErrorMessage>{error.message}</ErrorMessage>}
      {!error && helperText && <HelperText>{helperText}</HelperText>}
    </div>
  );
}
